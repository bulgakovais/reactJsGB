import { renderHook } from "@testing-library/react-hooks";
import { useRef } from "react";
import { SignForm } from "../index";

describe("тестирую компонент-контейнер SignForm", () => {

    it("рендер компонента SignForm", () => {

        renderHook(() => SignForm())

        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useParams: jest.fn().mockReturnValue({ chatId: '123456' }),
        }))

        jest.mock('react-redux', () => ({
            ...jest.requireActual('react-redux'),
            useDispatch: jest.fn().mockReturnValue({
                store: "store"
            })
        }))

        jest.fn(useRef)

    })
}) 