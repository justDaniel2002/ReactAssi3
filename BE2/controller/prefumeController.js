const Perfume = require("../models/Prefume");

const index = async (req, res, next) => {
    var { name, brandId } = res.body

    var perfumes = [];
    //call back
    await Perfume.find()
        .then((pfs) => {
            perfumes = pfs;
        })

    if (name) perfumes = perfumes.filter(pf => pf.perfumeName.tolower().contains(name.tolower().trim()));
    if (brandId) perfumes = perfumes.filter(pf => pf.brand == brandId);

    res.status(200).json({ prefume })
}

const getPrefume = async (req, res, next) => {
    await Perfume.findById(req.params.id).then((prefume) =>
        res.status(200).json({ prefume })
    );
};

const newPrefume = async (req, res, next) => {
    const newPrefume = new Perfume(req.body);
    console.log("req.body content ", req.body);

    console.log();

    await newPrefume.save().then(() => res.status(200).json({ newPrefume }));
};

const updatePrefume = async (req, res, next) => {

    await Perfume.findByIdAndUpdate(req.params.id, req.body).then((prefume) => {
        return res.status(200).json({ prefume });
    });
};

const deletePrefume = async (req, res, next) => {
    var {id} = req.params
    await Perfume.deleteOne({$id: id})
}
module.exports = {
    index,
    getPrefume,
    newPrefume,
    updatePrefume,
    deletePrefume
};