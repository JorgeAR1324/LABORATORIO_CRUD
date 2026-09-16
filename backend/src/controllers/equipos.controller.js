const equipoService = require('../services/equipos.service');

async function list(req,res,next) {
    try {
        const data = await equipoService.listEquipos();
        res.json({ ok: true, data});
    } catch (error) {
        next(error);
    }
}

async function getById(req, res,next) {
    try {
        const data = await equipoService.getEquipoById(req.params.id);
        res.json({ok: true, data});
    } catch (error) {
        next(error);
    }
}

async function create(req,res,next) {
    try {
        const data =await equipoService.createEquipo(req.body, req.file?.filename);
        res.json({ok: true, data});
    } catch (error) {
        next(error);
    }
}

async function update(req,res,next) {
    try {
        await equipoService.updateEquipo(req.params.id, req.body, req.file?.filename);
        res.json({ok: true, message: 'Equipo Actualizado'});
    } catch (error) {
        next(error);
    }
}

async function remove(req,res,next) {
    try {
        await equipoService.deleteEquipo(req.params.id);
        res.json({ok: true, message: 'Equipo eliminado'});
    } catch (error) {
        next(error);
    }
}

module.exports= {list, getById, create, update, remove};
