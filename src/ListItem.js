import { motion } from "framer-motion"

export function ListItem({deleteHandler,taskContent}) {
    return (
        <motion.div id="listContainer" onClick={() => deleteHandler()} animate={{ height: 60 }} initial={{height: 0}}>
            <li id="listItem">{taskContent}</li>
            <input type="checkbox" id="checkbox" onClick={function(e) {e.stopPropagation()}}></input>
        </motion.div>
    )
}
export default ListItem