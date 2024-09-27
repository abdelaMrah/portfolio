

 const getMatrix =(length:number):{rows:number,cols:number}=>{
    if (length == 0)
        return {
      cols:0,rows:0}

      let c = Math.ceil(Math.sqrt(length))
     return{
        rows:Math.ceil(length/c),
        cols:c
    }
}   

const getScreen =()=>{
    return {
        width:window.screen.width,
        height:window.screen.height
    }
}


export{
    getMatrix,
    getScreen
}