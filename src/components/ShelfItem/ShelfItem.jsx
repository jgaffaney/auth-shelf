function ShelfItem({item}) {

    console.log(item.description);
    return (
        <div>
            
            <img src={item.image_url} alt={item.description} />
            <p>{item.description}</p>
        </div>

    );
};
export default ShelfItem;