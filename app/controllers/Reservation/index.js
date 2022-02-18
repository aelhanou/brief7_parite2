const { reservationModel } = require("../../models")


const addReservation = async (data) => {
    try {
        let Reservation = await reservationModel.create(data)
        return Reservation
    } catch (error) {
        throw error
    }
}


const getReservationById = async (id) => {
    try {
        let ReservationByID = await reservationModel.findById(id)
        return ReservationByID
    } catch (error) {
        throw error
    }
}

const getAllReservations = async () => {
    try {
        let Reservations = await reservationModel.find()
        return Reservations
    } catch (error) {
        throw error
    }

}


const deleteReservation = async (id) => {
    try {
        await reservationModel.bulkWrite([
            {
                deleteOne: {
                    filter: { _id: id }
                }
            }
        ])
    } catch (error) {
        throw error
    }

}

const updateReservation = async (data) => {
    try {
        let { id } = data
        await reservationModel.bulkWrite([
            {
                updateOne: {
                    filter: { _id: id },
                    update: data
                }
            }
        ])
    } catch (error) {
        throw error
    }
}



module.exports = {
    addReservation,
    getReservationById,
    getAllReservations,
    deleteReservation,
    updateReservation
}