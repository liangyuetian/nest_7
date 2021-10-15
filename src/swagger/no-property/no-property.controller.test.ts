import * as no_property_controller from "./no-property.controller"
import * as update_no_property_dto from "./dto/update-no-property.dto"
// @ponicode
describe("getNoProperty", () => {
    let inst: any

    beforeEach(() => {
        inst = new no_property_controller.NoPropertyController()
    })

    test("0", () => {
        let param1: any = new update_no_property_dto.UpdateNoPropertyDto()
        let callFunction: any = () => {
            inst.getNoProperty(param1, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1: any = new update_no_property_dto.UpdateNoPropertyDto()
        let callFunction: any = () => {
            inst.getNoProperty(param1, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1: any = new update_no_property_dto.UpdateNoPropertyDto()
        let callFunction: any = () => {
            inst.getNoProperty(param1, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1: any = new update_no_property_dto.UpdateNoPropertyDto()
        let callFunction: any = () => {
            inst.getNoProperty(param1, 56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1: any = new update_no_property_dto.UpdateNoPropertyDto()
        let callFunction: any = () => {
            inst.getNoProperty(param1, 12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let param1: any = new update_no_property_dto.UpdateNoPropertyDto()
        let callFunction: any = () => {
            inst.getNoProperty(param1, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
