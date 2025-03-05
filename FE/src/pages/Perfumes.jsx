import React, { useEffect, useState } from 'react'
import { BrandsApi, PrefumesApi } from '../apis/APIs'
import axios from 'axios'
import { toast } from 'react-toastify'
import { userAtom } from '../../Jotal/atom'
import { useAtom } from 'jotai'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
    },
};

Modal.setAppElement('#root');

export default function Perfumes() {
    const [prefumes, setPrefumes] = useState([])
    const [user, setUser] = useAtom(userAtom)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [brands, setBrands] = useState([])
    const [searchName, setSearchName] = useState('')
    const [searchBrand, setSearchBrand] = useState()

    const [bindingPrefumes, setBindingPrefumes] = useState({})

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    const addPrefume = async () => {
        if (bindingPrefumes._id) {
            await axios.put(PrefumesApi + '/' + bindingPrefumes._id, bindingPrefumes).then(() => {
                closeModal()
                getPrefumes()
            }).catch(() => {
                toast.error('Failed to update prefumes')
            })
        } else {
            await axios.post(PrefumesApi, bindingPrefumes).then(() => {
                closeModal()
                getPrefumes()
            }).catch(() => {
                toast.error('Failed to add prefumes')
            })
        }
    }

    useEffect(() => {
        getPrefumes()
        getBrands()
    }, [])

    const getPrefumes = async () => {
        console.log(bindingPrefumes)
        await axios.post(PrefumesApi+"/search",{name: searchName, brandId: searchBrand}).then((data) => {
            console.log(data.data.perfumes)
            setPrefumes(data.data.perfumes ?? [])
        }).catch(() => {
            toast.error('Failed to get prefumes')
        })
    }

    const getBrands = async () => {
        await axios.get(BrandsApi).then((data) => {
            console.log(data.data.brands)
            setBrands(data.data.brands ?? [])
        }).catch(() => {
            toast.error('Failed to get brands')
        })
    }

    return (
        <div>
            <div className='w-2/3'>
                Prefume Name :
                <input className='border rounded-xl py-1 px-2 w-2/3'
                    value={searchName}
                    onChange={e => {
                        setSearchName(e.target.value)
                    }} />
                    <br />
                Brand :
                <select className='border rounded-xl py-1 px-2 w-2/3'
                    value={searchBrand}
                    onChange={e => {
                        setSearchBrand(e.target.value)
                    }}>
                        <option value={undefined}>All</option>
                    {brands.map(brand =>
                        <option value={brand._id}>{brand.brandName}</option>
                    )}
                </select>
                <br />
                <button onClick={() => {
                    getPrefumes()
                }} className='bg-blue-500 text-white px-4 py-1 rounded-lg font-medium my-4'>
                    Search
                </button>
            </div>
            {user?.isAdmin &&
                <button onClick={() => {
                    setBindingPrefumes({})
                    openModal()
                }} className='bg-blue-500 text-white px-4 py-1 rounded-lg font-medium my-4'>
                    Add Perfume
                </button>}

            <div id='prefumeList' className='flex flex-wrap gap-4'>
                {prefumes.map(prefume =>
                    <>
                        <div id='prefumeContainer' className='w-1/5 rounded-xl border py-10 px-5'>
                            <div><img src={prefume?.uri} alt='perfume' /></div>
                            <div>{prefume?.perfumeName}</div>
                            <div>{prefume?.price}</div>
                            <div>{prefume?.description}</div>
                            <div>{prefume?.targetAudience}</div>
                            <div>{prefume?.brand?.brandName}</div>


                            {user?.isAdmin && <button onClick={() => {
                                setBindingPrefumes(prefume)
                                openModal()
                            }} className='bg-blue-500 text-white px-4 py-1 rounded-lg font-medium my-4'>
                                Update
                            </button>}
                        </div>
                    </>
                )}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Add Prefume"
            >
                <div>
                    <div className='mb-3'>
                        <div>Prefume Name</div>
                        <input className='border rounded-xl py-1 px-2 w-2/3'
                            value={bindingPrefumes?.perfumeName}
                            onChange={e => {
                                bindingPrefumes.perfumeName = e.target.value
                                setBindingPrefumes({ ...bindingPrefumes })
                            }} />
                    </div>

                    <div className='mb-3'>
                        <div>URI</div>
                        <input className='border rounded-xl py-1 px-2 w-2/3'
                            value={bindingPrefumes?.uri}
                            onChange={e => {
                                bindingPrefumes.uri = e.target.value
                                setBindingPrefumes({ ...bindingPrefumes })
                            }} />
                    </div>

                    <div className='mb-3'>
                        <div>Price</div>
                        <input type='number' className='border rounded-xl py-1 px-2 w-2/3'
                            value={bindingPrefumes?.price}
                            onChange={e => {
                                bindingPrefumes.price = e.target.value
                                setBindingPrefumes({ ...bindingPrefumes })
                            }} />
                    </div>

                    <div className='mb-3'>
                        <div>Concentration</div>
                        <input className='border rounded-xl py-1 px-2 w-2/3'
                            value={bindingPrefumes?.concentration}
                            onChange={e => {
                                bindingPrefumes.concentration = e.target.value
                                setBindingPrefumes({ ...bindingPrefumes })
                            }} />
                    </div>

                    <div className='mb-3'>
                        <div>Description</div>
                        <input className='border rounded-xl py-1 px-2 w-full'
                            value={bindingPrefumes?.description}
                            onChange={e => {
                                bindingPrefumes.description = e.target.value
                                setBindingPrefumes({ ...bindingPrefumes })
                            }} />
                    </div>

                    <div className='mb-3'>
                        <div>Ingredients</div>
                        <input className='border rounded-xl py-1 px-2 w-2/3'
                            value={bindingPrefumes?.ingredients}
                            onChange={e => {
                                bindingPrefumes.ingredients = e.target.value
                                setBindingPrefumes({ ...bindingPrefumes })
                            }} />
                    </div>

                    <div className='mb-3'>
                        <div>Volume</div>
                        <input type='number' className='border rounded-xl py-1 px-2 w-2/3'
                            value={bindingPrefumes?.volume}
                            onChange={e => {
                                bindingPrefumes.volume = e.target.value
                                setBindingPrefumes({ ...bindingPrefumes })
                            }} />
                    </div>

                    <div className='mb-3'>
                        <div>Target Audience</div>
                        <input className='border rounded-xl py-1 px-2 w-2/3'
                            value={bindingPrefumes?.targetAudience}
                            onChange={e => {
                                bindingPrefumes.targetAudience = e.target.value
                                setBindingPrefumes({ ...bindingPrefumes })
                            }} />
                    </div>

                    <div className='mb-3'>
                        <div>Brands</div>
                        <select className='border rounded-xl py-1 px-2 w-2/3'
                            value={bindingPrefumes?.brand}
                            onChange={e => {
                                bindingPrefumes.brand = e.target.value
                                setBindingPrefumes({ ...bindingPrefumes })
                            }}>
                            {brands.map(brand =>
                                <option value={brand._id}>{brand.brandName}</option>
                            )}
                        </select>
                    </div>

                    <div className='flex justify-between'>
                        <button onClick={closeModal} className='bg-red-500 text-white px-4 py-1 rounded-lg font-medium my-4'>
                            Cancel
                        </button>
                        <button onClick={addPrefume} className='bg-blue-500 text-white px-4 py-1 rounded-lg font-medium my-4'>
                            Submit
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
