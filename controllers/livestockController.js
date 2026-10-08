const livestockModel = require("../models/livestockModel");

function validateLivestock(body) {
    const { nama, jenis, umur, berat, sehat } = body;

    if (
        !nama ||
        !jenis ||
        umur === undefined ||
        berat === undefined ||
        sehat === undefined
    ) {
        return "Semua field wajib diisi";
    }

    if (typeof sehat !== "boolean") {
        return "Field sehat harus bernilai true atau false";
    }

    return null;
}

exports.getAll = (req, res) => {
    const { jenis } = req.query;

    const data = livestockModel.getAll(jenis);

    res.json({
        status: "success",
        data
    });
};

exports.getById = (req, res) => {
    const id = Number(req.params.id);

    const data = livestockModel.getById(id);

    if (!data) {
        return res.status(404).json({
            status: "error",
            message: `Data livestock dengan id ${id} tidak ditemukan`,
            data: null
        });
    }

    res.json({
        status: "success",
        data
    });
};

exports.create = (req, res) => {
    const error = validateLivestock(req.body);

    if (error) {
        return res.status(400).json({
            status: "error",
            message: error,
            data: null
        });
    }

    const data = livestockModel.create(req.body);

    res.status(201).json({
        status: "success",
        message: "Data livestock berhasil ditambahkan",
        data
    });
};

exports.update = (req, res) => {
    const id = Number(req.params.id);

    if (!livestockModel.getById(id)) {
        return res.status(404).json({
            status: "error",
            message: `Data livestock dengan id ${id} tidak ditemukan`,
            data: null
        });
    }

    const error = validateLivestock(req.body);

    if (error) {
        return res.status(400).json({
            status: "error",
            message: error,
            data: null
        });
    }

    const data = livestockModel.update(id, req.body);

    res.json({
        status: "success",
        message: `Data livestock dengan id ${id} berhasil diperbarui`,
        data
    });
};

exports.remove = (req, res) => {
    const id = Number(req.params.id);

    const deleted = livestockModel.remove(id);

    if (!deleted) {
        return res.status(404).json({
            status: "error",
            message: `Data livestock dengan id ${id} tidak ditemukan`,
            data: null
        });
    }

    res.json({
        status: "success",
        message: `Data livestock dengan id ${id} berhasil dihapus`,
        data: null
    });
};