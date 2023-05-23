import React, { useRef } from 'react';

const FilterBar = ({ motoList }) => {
    const select1Ref = useRef(null);
    const select2Ref = useRef(null);
    const select3Ref = useRef(null);

    let engine_size = new Set(motoList.map( (moto) => {return moto.cc}));
    engine_size = [...engine_size].sort((a,b)=>(a-b));

    let moto_year = new Set(motoList.map( (moto) => {return moto.year} ));
    moto_year = [...moto_year].sort((a,b)=>(a-b));

    let brand_types = new Set(motoList.map( (moto) => {return moto.brand}));
    brand_types = [...brand_types].sort((a,b) =>  {return a.localeCompare(b)});

    async function formSubmit (e) {
        e.preventDefault();
        await removeHide(e, false);
        const brand_type = document.getElementById('brand_type').value;
        const moto_year = document.getElementById('moto_year').value;
        const engine_size = document.getElementById('engine_size').value;
        if(brand_type != 'None' || moto_year != 'None' || engine_size != 'None'){
            motoList.forEach((moto) => {
                let li = document.getElementById(moto.id);
                if(brand_type != 'None' && moto.brand != brand_type){
                    li.classList.add('hide');
                };
                if(moto_year != 'None' && moto.year != moto_year){
                    li.classList.add('hide');
                };
                if(engine_size != 'None' && moto.cc != engine_size){
                    li.classList.add('hide');
                };
            });
        };
    };

    async function removeHide(e, remove=true){
        e.preventDefault();
        const hidden = document.querySelectorAll('.hide');
        hidden.forEach((child) => {child.classList.remove('hide')});
        if(remove){
            select1Ref.current.value = 'None';
            select2Ref.current.value = 'None';
            select3Ref.current.value = 'None';
        };
    }

    return (
        <form id='filter-bar' className='filter-bar'>
            <div id='div-of-selects' className='div-of-selects'>
                <div id='select-1'>
                    <label htmlFor='brand_type'>Brand</label>
                    <select id='brand_type' name='brand_type' ref={select1Ref} className='select-1'>
                        <option> None </option>
                        {brand_types.map((brand) => {
                            return( <option key={brand} value={brand}>{brand}</option> )
                        })}
                    </select>
                </div>
                <div id='select-2'>
                    <label htmlFor='engine_size'>CC's</label>
                    <select id='engine_size' name='engine_size' ref={select2Ref} className='select-2'>
                        <option> None </option>
                        {engine_size.map((size) => {
                            return( <option key={size} value={size}>{size}</option> )
                        })}
                    </select>
                </div>
                <div id='select-3'>
                    <label htmlFor='moto_year'>Year</label>
                    <select id='moto_year' name='moto_year' ref={select3Ref}  className='select-3'>
                        <option> None </option>
                        {moto_year.map((year) => {
                            return( <option key={year} value={year}>{year}</option> )
                        })}
                    </select>
                </div>
            </div>
            <div id='buttons' className='buttons'>
                <input className='button' type='submit' value='Filter' onClick={formSubmit}/>
                <input className='button' type='submit' value='Remove Filter' onClick={removeHide}/>
            </div>
        </form>
    );
};

export default FilterBar;