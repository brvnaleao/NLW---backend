
import { getRepository } from 'typeorm';
import { Request, Response } from 'express'
import Orphanage from '../model/Orphanage';

export default {
    async index(req: Request, res: Response){
        const orphanagesRepository = getRepository(Orphanage);
        const orphanages = await orphanagesRepository.find();

        return res.json(orphanages)

    },
    async show(req: Request, res: Response){
        const id = req.params
        const orphanagesRepository = getRepository(Orphanage);
        const orphanages = await orphanagesRepository.findOneOrFail(id);

        return res.json(orphanages)

    },

    async create(req: Request, res: Response){
        const {
            name,
            latitude,
            longitude,
            about, 
            instructions,
            opening_hours, 
            open_on_weekends
        } = req.body;
    
        const orphanagesRepository = getRepository(Orphanage);
    
        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about, 
            instructions,
            opening_hours, 
            open_on_weekends,
        })
        
        try{
            await orphanagesRepository.save(orphanage);
        }
        catch(e){
            return res.status(400).json({erro: "sim"})
        }
        return res.status(201).json(orphanage)
    }
}