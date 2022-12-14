import { Request, Response } from "express";
import Usuario from "../models/usuario";


export const getUsuarios = async (req: Request, res: Response) => {
    const usuarios = await Usuario.findAll();

    res.json({
        usuarios
    });
}

export const getUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if(usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({
            msg: `Não existe usuário com o id ${id}`
        });
    }
}

export const postUsuario = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: 'postUsuario',
        body
    })
}

export const putUsuario = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'putUsuario',
        body,
        id
    })
}

export const deleteUsuario = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'deleteUsuario',
        id
    })
}