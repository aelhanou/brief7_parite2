const { userModel } = require("./user")
const { roleModel } = require("./Role")
const { reservationModel } = require("./Reservation")
const { shipModel } = require("./Ship")
const { BlockModel } = require("./Block")
const { Block_PartModel } = require("./Block_part")
const { CommunicationChannelModel } = require("./CommunicationsChannel")
const { CategoriesModel } = require("./Categorie")
const { ContainerModel } = require("./Container")
const { CustomFeesModel } = require("./CustomFees")
const { DriverModel } = require("./Driver")
const { portModel } = require("./Port")
const { quayModel } = require("./Quay")
const { ShipeOwnerModel } = require("./ShipOwner")
const { StorageAreaModel } = require("./StorageArea")
const { systemModel } = require("./System")
const { TruckModel } = require("./Truck")
const { typeModel } = require("./Type")




module.exports = {
    userModel,
    roleModel,
    reservationModel,
    shipModel,
    BlockModel,
    Block_PartModel,
    StorageAreaModel,
    CommunicationChannelModel,
    CategoriesModel,
    ContainerModel,
    CustomFeesModel,
    DriverModel,
    portModel,
    quayModel,
    ShipeOwnerModel,
    systemModel,
    TruckModel,
    typeModel
}