import { Card } from "react-bootstrap"
import Button from "@restart/ui/esm/Button"

//Muestro el item

const ItemDetail = ({items}) => {
    return (
        <>
        <Card key={items[0].name} style={{ margin: '20px',width: '30%'}}>
            <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" />
            <Card.Body>
                <Card.Title>{items[0].name}</Card.Title>
                <Button className="btn btn-dark" variant="primary">Ver</Button>
            </Card.Body>
        </Card>
        </>
    )
}

export default ItemDetail
