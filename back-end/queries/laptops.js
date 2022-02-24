const db = require("../db/dbConfig");

const getAllLaptops = async () => {
    try{
        const allLaptops = await db.any("SELECT * FROM laptops");
        return allLaptops;
    } catch (error) {
        return error
    }
};

const getOneLaptop = async (id) => {
    try{
        const oneLaptop = await db.one("SELECT * FROM laptops WHERE id=$1", id);
        return oneLaptop;
    } catch (error) {
        return error;
    }
};

const createLaptop = async (laptop) => {
    try{
        const {name, description, price, rating, featured, image} = laptop
        const newLaptop = await db.one(
        "INSERT INTO laptops (name, description, price, rating, featured, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        [name, description, price, rating, featured, image]    
        );
        return newLaptop;
    } catch (error) {
        return error;
    }
}

const deleteLaptop = async (id) => {
    try {
        const deletedLaptop = await db.one(
            "DELETE FROM laptops WHERE id=$1 RETURNING *", id);
            return deletedLaptop
    } catch(error) {
        return error
    }
}

const editLaptop = async (id, laptop) => {
    try {
        const {name, description, price, rating, featured, image} = laptop;
        
        const updatedLaptop = await db.one("UPDATE laptops SET name=$1, description=$2, price=$3, rating=$4, featured=$5, image=$6 WHERE id=$7 RETURNING *",
        [name, description, price, rating, featured, image, id])
        return updatedLaptop
    } catch (error){
        return error;
    }
};



module.exports = {
    getAllLaptops, 
    getOneLaptop,
    createLaptop,
    deleteLaptop,
    editLaptop,
}


