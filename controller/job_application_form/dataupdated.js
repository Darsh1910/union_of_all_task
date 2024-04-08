

function dataUpdated(req,res)
{
    try {
        res.send("Data Updated Successfully !!!!");
    } catch (error) {
      console.log(error);
    }
}

module.exports = dataUpdated;