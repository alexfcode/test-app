function Accordion() {
    console.log("Accordion rendering");
    // debugger;
    // return (
    //   <div>
    //     <h3>Меню</h3>
    //     <ul>
    //       <li>1</li>
    //       <li>2</li>
    //       <li>3</li>
    //       <li>4</li>
    //       <li>5</li>
    //     </ul>
    //   </div>
    // );
    return (<>
  <AccordionTitle  />
  <AccordionBody  /> 
    </>
  )
  }

  function AccordionTitle() {
    console.log("AccordionTitle rendering");
  return <h3>Меню</h3>
  }
  
  function AccordionBody() {
    console.log("AccordionBody rendering");
    return (
      <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    )
    
  }

  export default Accordion