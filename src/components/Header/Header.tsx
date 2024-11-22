import './Header.css'
export function Header({ data }: any) {

	return (
		<header className='header'>
			<div className="container">

				<div className='wrap_header'>
					<h1>Учет сотрудников в компании N</h1>
					<h2>Общее число сотрудников:{data.length}</h2>
					<h2>Премию получат: {data.reduce((count: number, item: any) => item.bonus === true ? count + 1 : count, 0)} </h2>
				</div>
			</div>
		</header>
	)

}