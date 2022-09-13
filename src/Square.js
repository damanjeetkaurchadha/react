const Square = ({colorValue,hexValue,isDarkText}) => {
  return (
<square>
<section className="square" 
    style={{ 
        backgroundColor: colorValue ,
        color: isDarkText ?"#000" :"#FFF"
    }}>

<p>{ colorValue ? colorValue : "empty" }</p>

<p>{ hexValue ? hexValue : "null" }</p>

</section>
</square>
  )
}

Square.defaultProps = {
    colorValue: "Empty color value"
}
export default Square