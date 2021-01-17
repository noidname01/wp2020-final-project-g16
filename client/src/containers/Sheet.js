import './Sheet.css';




function createCol(col, index){
	
	const title = col[1];
	const items = col.filter((e,i)=>i>1);

	const itemProcessor = (item) =>{
		if(item===undefined){
			return 'item';
		}else if(item.text!==undefined){
			return item.text;
		}else if(item.text===undefined){
			return item;
		}
	}

	return(
		<section key={index} className='column'>
			<div>
				<h2>{title}</h2>
			</div>
			<div>
				{items.map((item,i)=><input key={index+'_'+i} defaultValue={itemProcessor(item)}></input>)}
			</div>

		</section>
	)
}





function Sheet(props){
	const sheet = props.sheet;
	let columns = Array();
	if(sheet.length > 0){
		

		/*for(let i=0; i<sheet.length; i++){
			columns.push(createCol(sheet[i], i));
			console.log(columns);
		}	*/
		return(
			<div className='main-sheet'>
			{sheet.map((col,i)=>createCol(col,i)) }
			</div>
		)
	}else{
		return(<div>No file</div>)
	}
	
}

export default Sheet;