function validatePIN (pin) {
    //return true or false
    if (pin.length ==4 | pin.length == 6){
      if(/^[0-9]+$/.test(pin)){
        return true
      }else{return false}
    }
    return false
  }