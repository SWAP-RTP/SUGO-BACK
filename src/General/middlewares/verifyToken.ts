import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface DecodedToken {
    modulo: number;
    [key: string]: any;
}

declare global {
    namespace Express {
        interface Request {
            usuario?: DecodedToken;
        }
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Token no proporcionado" });
        }

        const secretKey = "CLAVE_SUPER_SECRETA_PARA_SITEG_LARGA_2026_MUY_SEGURA";
        const decoded = jwt.verify(token, secretKey) as any;
        console.log("Token decodificado:", decoded);
        req.usuario = {
            modulo: Number(decoded.data.modulo),
            ...decoded.data
        };
        next();
    } catch (error) {
        console.error("Error en token:", error);
        return res.status(401).json({ error: "Token invalido o expirado" });
    }

};