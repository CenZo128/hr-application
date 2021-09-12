const { region } = require('../models')

class RegionController {

    static async getRegions(req, res) {
        try {
            const queries = req.query

            if (Object.keys(queries).length === 0) {
                const regions = await region.findAll()
                res.status(200).json(regions)
            } else {

                const [queryKey] = Object.keys(queries)
                switch (queryKey) {
                    case 'search':
                        const name = queries[queryKey];
                        const resultName = await region.findAll({
                            where: {
                                name
                            }
                        })
                        res.status(200).json(resultName)
                        break;
                    case 'id':
                        const id = queries[queryKey]
                        const result = await region.findByPk(+id)

                        res.status(200).json(result)
                        break;
                    default:
                        res.status(400).json({
                            message: "Unknown query key"
                        })
                        break;
                }
                // res.json(queries)
            }
        } catch (e) {
            res.status(500).json(e)
        }
    }

    static async add(req, res) {
        try {
            const { name } = req.body;

            const foundName = await region.findOne({
                where: { name }
            })
            if (foundName) {
                res.status(400).json({
                    message: 'Duplicate name!'
                })
            } else {
                const result = await region.create({
                    name
                })
                res.status(201).json(result)
            }
        } catch (e) {
            res.status(500).json(e)
        }
    }
    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { name } = req.body;

            const result = await region.update({
                name
            }, {
                where: { id },
            })
            if (result[0] === 1) {
                res.status(200).json({
                    message: `${id} has been updated!`
                })
            } else {
                res.status(400).json({
                    message: `${id} hasn't been updated!`
                })
            }
        } catch (e) {
            res.status(500).json(e)
        }
    }
    static async delete(req, res) {
        try {
            const id = +req.params.id;

            const result = await region.destroy({
                where: { id }
            })

            if (result) {
                res.status(200).json({
                    message: `${id} has been deleted!`
                })
            } else {
                res.status(400).json({
                    message: `${id} has not been deleted!`
                })
            }
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = RegionController;