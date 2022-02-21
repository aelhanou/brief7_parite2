const router = require("express").Router()

const { registerRouter, loginRouter, BlockRouter, storageAreaRouter, CategorieRouter, Block_PartRouter, CommunicationsChannelRouter, TruckRouter, DriverRouter, ContainerRouter, CustomFeeRouter, ShipRouter, ShipOwnerRouter, QuayRouter, TypeRouter, ReservationRouter } = require("./v1")



router.use(registerRouter)
router.use(loginRouter)
router.use(BlockRouter)
router.use(storageAreaRouter)
router.use(CategorieRouter)
router.use(Block_PartRouter)
router.use(CommunicationsChannelRouter)
router.use(TruckRouter)
router.use(DriverRouter)
router.use(ContainerRouter)
router.use(CustomFeeRouter)
router.use(ShipRouter)
router.use(ShipOwnerRouter)
router.use(QuayRouter)
router.use(TypeRouter)
router.use(ReservationRouter)












module.exports = {
    router
}