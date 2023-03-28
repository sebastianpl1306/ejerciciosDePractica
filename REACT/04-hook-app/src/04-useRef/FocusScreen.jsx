import { useRef } from "react"

export const FocusScreen = () => {
    const inputFocus = useRef();

    const onFocusInput = () =>{
        inputFocus.current.select();
    }

  return (
    <>
        <h1>FocusScreen</h1>
        <hr />

        <input
            ref={ inputFocus }
            type="text"
            placeholder="Name"
            className="form-control"
        />

        <button className="btn btn-primary mt-2" onClick={ onFocusInput }>Focus</button>
    </>
  )
}