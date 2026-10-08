let livestock = [
    {
        id: 1,
        nama: "Sapi Limousin",
        jenis: "sapi",
        umur: 3,
        berat: 450,
        sehat: true
    },
    {
        id: 2,
        nama: "Kambing Etawa",
        jenis: "kambing",
        umur: 2,
        berat: 55,
        sehat: true
    },
    {
        id: 3,
        nama: "Ayam Broiler",
        jenis: "ayam",
        umur: 1,
        berat: 2,
        sehat: false
    }
];

let nextId = 4;

function getAll(jenis) {
    if (jenis) {
        return livestock.filter(
            item => item.jenis.toLowerCase() === jenis.toLowerCase()
        );
    }

    return livestock;
}

function getById(id) {
    return livestock.find(item => item.id === id);
}

function create(data) {
    const newLivestock = {
        id: nextId++,
        ...data
    };

    livestock.push(newLivestock);
    return newLivestock;
}

function update(id, data) {
    const index = livestock.findIndex(item => item.id === id);

    if (index === -1) {
        return null;
    }

    livestock[index] = {
        id,
        ...data
    };

    return livestock[index];
}

function remove(id) {
    const index = livestock.findIndex(item => item.id === id);

    if (index === -1) {
        return false;
    }

    livestock.splice(index, 1);
    return true;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};