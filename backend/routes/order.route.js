let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

//Order Model
let orderSchema = require('../models/Order')

//Create Order
router.route('/create-order').post((req, res, next) => {
    orderSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    })
})

//Read Order
router.route('/').get((req, res) => {
    orderSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

//Get Single Order Information
router.route('/edit-order/:id').get((req, res) => {
    orderSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

//Update Order
router.route('/update-order/:id').put((req, res, next) => {
    orderSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log("Error");
        } else {
            res.json(data);
            console.log('Order has been updated');
        }

    })
})

//Delete Order
router.route('/delete-order/:id').delete((req, res, next) => {
    orderSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;