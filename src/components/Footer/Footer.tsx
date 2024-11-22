import './Footer.css'

type Props = {
	nameValue: string
	salaryValue: string
	setNameValue: (text: string)=> void
	addItem: () => void
  setSalaryValue: (number: string)=> void
}

export function Footer({
	nameValue,
	salaryValue,
	setNameValue,
	addItem,
  setSalaryValue
}: Props) {


	return (
		<footer>
			<div className="container">
				<div className="wrap_footer">
					<div className="new_staff">
						<div>Добавьте нового сотрудника</div>


						<input
							value={nameValue}
							onChange={(text) => setNameValue(text.currentTarget.value)}
							
							className='name_staff'
							type="text"
							placeholder='Имя Сотрудника' 
						/>


						<input
							value={salaryValue}
							onChange={(text) => setSalaryValue(text.currentTarget.value)}

							className='wage_staff'
							type="text"
							placeholder='З/П в $?' />

						<button
							onClick={() => addItem()}
							className='add_new'
						>
							Добавить
						</button>

					</div>
				</div>
			</div>
		</footer>
	)
}