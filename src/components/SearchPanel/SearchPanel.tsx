import { ChangeEvent, FC, useState } from "react"

type Props = {
    onUpdateSearch: (text: string) => void
}


export const SearchPanel: FC<Props> = ({ onUpdateSearch }) => {

    const [term, setTerm] = useState('')


    function onUpdateSearchText(event: ChangeEvent<HTMLInputElement>) {
        setTerm(event.currentTarget.value)
        onUpdateSearch(event.currentTarget.value)
    }

    return (
        <div className='main_input'>

            <input
                onChange={onUpdateSearchText}
                value={term}
                type="text"
                placeholder='Найти сотрудника'
            />
        </div>
    )
}