import './FilterStaff.css'

export function FilterStaff({activeButton, filterStaff, data} : any) {
    
  
  const buttonsData = [
    {name: 'all', text: 'Все сотрудники'},
    {name: 'promotion', text: 'На повышение:'},
    {name: 'more1000', text: 'З/П больше 1000 $'},
  ]
  
  return(
      <div className="main_buttons">
        {buttonsData.map((item, index ) => { 
            return <button 
              className={activeButton === ++index ? 'btn__staff active' : 'btn__staff'} 
              onClick={() => filterStaff(index)}
              > 
              {item.text}
          </button>
        })}
      </div>
    )
  }




  //  {data.reduce((count: number, item: any) => item.promotion === true ? count + 1 : count, 0)}
  

