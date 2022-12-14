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

export const postUsuario = async(req: Request, res: Response) => {

    const { body } = req;
    
    try {
        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if(existeEmail) {
            return res.status(400).json({
                msg: `Já existe um usuário com o email ${body.email}`
            })
        }

        const usuario = new Usuario(body);
        await usuario.save();
        
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Fale com o adminstrador'
        });
        
    }

   
}

export const putUsuario = async(req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findByPk(id);
        if(!usuario) {
            return res.status(404).json({
                msg: `Não existe um usuário com o id ${id}`,
            })
        }

        await usuario.update(body);

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Fale com o adminstrador'
        });
        
    }
}

export const deleteUsuario = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'deleteUsuario',
        id
    })
}