import Profile from "../index";
import { renderHook } from "@testing-library/react-hooks";

describe("тестирую презентационный компонент Profile", () => {
    it("рендер Profile", () => {

        renderHook(() => Profile())
        jest.mock('react-redux', () => ({
            ...jest.requireActual('react-redux'),
            useDispatch: jest.fn().mockReturnValue({
                store: "store"
            })
        }))

    })

    it("Тестирование Button на событие on click", () => {

    })
}) 