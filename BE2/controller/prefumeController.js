const Perfume = require("../models/Prefume");

const index = async (req, res, next) => {
    var body = req?.body
    console.log(body)
    var perfumes = [];
    //call back
    await Perfume.find().populate('brand')
        .then((pfs) => {
            perfumes = pfs;
        })

    if (body?.name) perfumes = perfumes.filter(pf => pf.perfumeName.toLowerCase().includes(body?.name.toLowerCase().trim()));
    if (body?.brandId && body?.brandId!="All") perfumes = perfumes.filter(pf => pf?.brand?._id == body?.brandId);

    res.status(200).json({ perfumes })
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
    await Perfume.findByIdAndUpdate(req.params.prefumeID, req.body).then((prefume) => {
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