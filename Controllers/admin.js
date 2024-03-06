
const adminSchema = require('../Models/adminData');


exports.adminPanelDataCreate = async (req, res) => {

    try {
        const reqData = req.body;
        console.log('object :>> ', reqData);
        const users = new adminSchema(reqData);
        const adminDetail = await users.save();
        res.send({ status: 200, message: 'success', adminDetail });

    } catch (error) {
        console.log('error', error);
        res.send({ status: 400, message: 'Error', message: "Validation Error" });
    }

}


exports.adminPanelDataGet = async (req, res) => {
    try {
        const reqData = req.body;
        console.log('object :>> ', reqData);

        const adminPanelData = await adminSchema.find(reqData);
        res.send({ status: 200, message: 'success', adminPanelData });

    } catch (error) {
        console.log('error', error);
        res.send({ status: 400, message: 'Error', message: "Validation Error" });
    }

}


exports.countOfEmployeebasis = async (req, res) => {

    try {

        const startDate = req.body.start || '';
        const endDate = req.body.end || '';
        let filter = [
            {
                $group: {
                    _id: "$bikeName",
                    count: { $sum: 1 }
                }
            }
        ];

        let filter1 = [
            {
                $group: {
                    _id: "$username",
                    totalMinutes: { $sum: "$minutes" }
                }
            }
        ]

        if (startDate && endDate) {
            filter = [
                {
                    $match: {
                        Date: { $gte: new Date(startDate), $lte: new Date(endDate) }
                    }
                },
                {
                    $group: {
                        _id: "$bikeName",
                        count: { $sum: 1 }
                    }
                }
            ]

            filter1 = [
                {
                    $match: {
                        Date: { $gte: new Date(startDate), $lte: new Date(endDate) }
                    }
                },
                {
                    $group: {
                        _id: "$username",
                        totalMinutes: { $sum: "$minutes" }
                    }
                }
            ]

        }

        const bikeResult = await adminSchema.aggregate(filter);
        const employeeResult = await adminSchema.aggregate(filter1);
        res.send({ status: 200, message: 'success', bikeResult, employeeResult });


    } catch (e) {
        console.log('e', e)

    }
}

