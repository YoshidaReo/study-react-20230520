import { InputForm } from "./InputForm";
import { Main } from "./Main";
import classes from "./Contents.module.css"

export function Contents() {
  return (
    <>
      <h2 className={classes.h2}>プログラミングはじめました</h2>
      
      <InputForm />

      <Main />
    </>
  )
}
