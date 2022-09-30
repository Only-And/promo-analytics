import styles from '../styles/Analise.module.css'
import React, { useRef,useState} from "react";
import useSWR from 'swr'



const Bodyanalise = () => {
    const selectRef = useRef(null)
    const ulRef = useRef(null)
    const buttonRef = useRef(null)
    const input = useRef(null)
    const [data, setData] = useState(null)


    async function handleChange(e) {
        console.log(selectRef.current.value)
    }

     async function handleClick(e) {
        buttonRef.current.disabled = true;
        const selectValue = selectRef.current.value
        const inputValue = input.current.value
        if(selectValue == 'drogasil') {
            const farmacia = 'drogasil'
            const data = await getStaticProps(inputValue, farmacia)
            ulRef.current.innerHTML = `
            <tr>
            <th>Nome</th>
            <th>Preço</th>
            </tr>
            `
            const products = data.props.products

            for(let i=0; i < products.name.length; i++) {
                ulRef.current.innerHTML += `
                <tr>
                    <td style='width: 50%' class='td-line'>${products.name[i]}</td>
                    <td class='td-line'>${products.price[i]}</td>
                </tr>`
            }
            buttonRef.current.disabled = false;

        }

        if(selectValue == 'ultrafarma') {
            const farmacia = 'ultrafarma'
            const data = await getStaticProps(inputValue, farmacia)
            ulRef.current.innerHTML = `
            <tr>
            <th>Nome</th>
            <th>Preço</th>
            </tr>
            `
            const products = data.props.products

            for(let i=0; i < products.name.length; i++) {
                ulRef.current.innerHTML += `
                <tr>
                    <td style='width: 50%' class='td-line'>${products.name[i]}</td>
                    <td class='td-line'>${products.price[i]}</td>
                </tr>`
            }
            buttonRef.current.disabled = false;

        }

        if(selectValue == 'drogariasaopaulo') {
            const farmacia = 'drogariasp'
            const data = await getStaticProps(inputValue, farmacia)
            ulRef.current.innerHTML = `
            <tr>
            <th>Nome</th>
            <th>Preço</th>
            </tr>
            `
            const products = data.props.products

            for(let i=0; i < products.name.length; i++) {
                ulRef.current.innerHTML += `
                <tr>
                    <td style='width: 50%' class='td-line'>${products.name[i]}</td>
                    <td class='td-line'>${products.price[i]}</td>
                </tr>`
            }
            buttonRef.current.disabled = false;

        }
    }

    return(
    <main className={styles.main_form}>
        <section className={styles.section_formulario}  id="sf">
            <form className={styles.formulario}>
                <label for='input_01' className={styles.label_medicamento}>Medicamento</label>
                <label for='select_farmacia' className={styles.label_farmacia}>Farmacia</label><br/>
                <input type='text' className={styles.input_01} id='input_01' ref={input}></input>
                <select className={styles.select_farmacia} ref={selectRef} onChange={handleChange} selected="" id="select_farmacia">
                    <option value="drogasil">Drogasil</option>
                    <option value="drogariasaopaulo">Drogaria São Paulo</option>
                    <option value="ultrafarma">Ultrafarma</option>
                    <option value="todas">Todas</option>
                </select>
                <button type="button" className={styles.button_search} onClick={handleClick} ref={buttonRef}>Buscar</button>

            </form>
            
            <div className={styles.div_products}>
                    <table className={styles.table} border='collapse'>
                        <tbody ref={ulRef}>
                        <tr>
                            <th style={{padding: '0 10px'}}>Nome</th>
                            <th style={{padding: '0 10px'}}>Preço</th>
                        </tr>
                        </tbody>

                    </table>
                </div>

        </section>
    </main>
)}



export default React.forwardRef(Bodyanalise)

export async function getStaticProps(inputValue, farmacia) {
    if(farmacia == 'drogasil') {
        const response = await fetch(`http://localhost:3000/api/drogasil?produto=${inputValue}`);
        const products = await response.json();
      
        return {
          props: { products },
        };
    }

    if (farmacia == 'ultrafarma') {
        const response = await fetch(`http://localhost:3000/api/ultrafarma?produto=${inputValue}`);
        const products = await response.json();
      
        return {
          props: { products },
        };
    }
    
    if (farmacia == 'drogariasp') {
        const response = await fetch(`http://localhost:3000/api/drogariasp?produto=${inputValue}`);
        const products = await response.json();
      
        return {
          props: { products },
        };
    }

  }
  