import { useState } from 'react'

import { Header } from '../Header/Header'

import './App.css'

import { Footer } from '../Footer/Footer'

import { FilterStaff } from '../FilterStaff/FilterStaff'

import { SearchPanel } from '../SearchPanel/SearchPanel'

let id = 3


type DataArray = {
  name: string
  salary: number
  bonus: boolean
  promotion: boolean
  id: number
}



export function App() {

  const [data, setData] = useState<DataArray[]>(
    [
      { name: 'John C.', salary: 800, bonus: false, promotion: false, id: 1 },
      { name: 'Alex M.', salary: 4000, bonus: false, promotion: true, id: 2 },
      { name: 'Carl K.', salary: 700, bonus: false, promotion: false, id: 3 },
    ]
  )
  const [term, setTerm] = useState('')



  const [nameValue, setNameValue] = useState('')
  const [salaryValue, setSalaryValue] = useState('')
  const [countPromotion, setCountPromotion] = useState(0)




  const addItem = () => {


    if (nameValue.trim() && salaryValue.trim()) {
      let obj = {
        name: nameValue,
        salary: Number(salaryValue),
        bonus: false,
        promotion: false,
        id: id = id + 1
      }
      setData([...data, obj])
    } else {
      console.log('Error - fn addItem')
    }
    setNameValue("")
    setSalaryValue("")
  }


  const updatePromotionById = (id: number) => {
    console.log('hello')
    const updateData = data.map(item => {
      if (item.id === id) {
        return { ...item, promotion: !item.promotion }
      }
      return item

    })

    const newCountIncrese = updateData.reduce((count, item) => item.promotion === true ? count + 1 : count, 0)
    setCountPromotion(newCountIncrese)

    setData(updateData)
  }


  const updateBonusByID = (id: number) => {
    console.log(id)

    const updateData = data.map(item => {
      if (item.id === id) {
        return { ...item, bonus: !item.bonus }
      }
      return item
    })

    setData(updateData)

  }


  const removeItemById = (id: number) => {
    const filteredData = data.filter(item => {
      return item.id !== id
    })

    const newCountIncrese = filteredData.reduce((count, item) => item.promotion === true ? count + 1 : count, 0)
    setCountPromotion(newCountIncrese)
    setData(filteredData)
  }

  function selectionStafferPromotion(id: number) {
    updatePromotionById(id)
  }

  const [activeButton, setActiveButton] = useState(1)




  function searchStaff(items: DataArray[], term: string) {
    if(term.length === 0){
      return items
    }  

    const data  = items.filter((item: DataArray) => item.name.includes(term))
    return data
  }
  
  function onUpdateSearch(term: string) {
    setTerm(term)
  }

  function filterPost(items: DataArray[], filter: number) {
    if (filter === 1) {
      return items
    }
    if (filter === 2) {
      return items.filter((item: DataArray) => item.promotion)
    }
    if (filter === 3) {
      return items.filter((item: DataArray) => item.salary > 1000)
    }
  }

  const filterStaff = (value: number) => {
    console.log(value)
    setActiveButton(value)
  }


  const visibleData = filterPost(searchStaff(data, term), activeButton )

  return (
    <>
      <Header data={data} />
      <main className='main'>
        <div className="container">

          <div className="wrap_main">

          <SearchPanel onUpdateSearch={onUpdateSearch}/>

           
            <FilterStaff
              activeButton={activeButton}
              filterStaff={filterStaff}
              data={data}
            />
          </div>

          <div className="staff">
            <div className='staff__wrap'>

              {visibleData?.map((item: DataArray) => {
                return <div className='staff__item'>

                  <div onClick={() => selectionStafferPromotion(item.id)} className={item.promotion ? 'staff__name selected' : 'staff__name'}>
                    {item.name}
                  </div>
                  <div className='staff__elems'>
                    <div className='staff__salary'>
                      {item.salary} $
                    </div>

                    <div className='staff__func'>

                      <div className={

                        item.bonus === true
                          ? 'staff__bonus bonus'
                          : 'staff__bonus'

                      } onClick={() => updateBonusByID(item.id)}>🍪</div>

                      <div className='staff__remove staff__icon' onClick={() => removeItemById(item.id)}>🗑️</div>

                      <div
                        onClick={() => updatePromotionById(item.id)}
                        className={item.promotion ? 'staff__promotion active' : 'staff__promotion'}>
                        {item.promotion ? '⭐️' : ''}
                      </div>
                    </div>
                  </div>
                </div>
              })}
            </div>

          </div>
        </div>
      </main>

      <Footer
        nameValue={nameValue}
        salaryValue={salaryValue}
        setNameValue={(text: string) => setNameValue(text)}
        addItem={addItem}
        setSalaryValue={setSalaryValue}
      />
    </>
  )
}


