import { Box, Button, Modal, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { SetStateAction, useEffect, useRef, useState } from 'react';
import '../App.css';
import PopUpCard from "../Components/PopUpCard";

interface dataTable {
    item: string;
    quantity: number;
    number: number;
}

export default function Home() {
    const data = [
        { item: "Apple Watch ⌚️", number: 1, index: 'one', quantity: 1 },
        { item: "Thank you 😋", number: 2, index: 'two', quantity: -1 },
        { item: "Thank you 🙏", number: 3, index: 'three', quantity: -1 },
        { item: "Vacuum cleaner 🧹", number: 4, index: 'four', quantity: 2 },
        { item: "Money 💸", number: 5, index: 'five', quantity: -1 },
        { item: "Thank you 😱", number: 6, index: 'six', quantity: -1 },
        { item: "Thankyou 🫣", number: 7, index: 'seven', quantity: -1 },
    ];
    const myButtonRef = useRef<HTMLButtonElement | null>(null);
    const [tableData, setTableData] = useState<dataTable[]>([]);
    const [isFirst, setIsFrist] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState(0);
    const [resultItem, setResultItem] = useState("");

    useEffect(() => {
        if (!isFirst) {
            const dataTable = data.map((item) => ({
                item: item.item,
                quantity: item.quantity,
                number: item.number,
            }));
            setTableData(dataTable);
            setIsFrist(true);
        } else {
            const updatedData = tableData.map((item) => {
                if (result === 1 && item.number === 1 && item.quantity > 0) {
                    // If randomNumber is 1 and the item number is 1, decrement quantity by 1
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                } else if (result === 4 && item.number === 4 && item.quantity > 0) {
                    // If randomNumber is 4 and the item number is 1, decrement quantity by 4
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }
                return item;
            });
            const dataTable = updatedData.map((item) => ({
                item: item.item,
                quantity: item.quantity,
                number: item.number,
            }));
            setTableData(dataTable);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result]);

    const handleButtonClick = () => {
        if (myButtonRef.current) {
            myButtonRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        handleButtonClick();
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleSpinClick = () => {
        let randomNumber: SetStateAction<number>;
        let isNoZero = 0;
        randomNumber = Math.floor(Math.random() * 7) + 1;
        const itemNumber = tableData.findIndex((item) => (item.number == randomNumber && item.quantity == 0));

        if (itemNumber !== -1) {
            // Continue generating a new random number until it is different from the current tableData[itemNumber].number
            // or until a tableData item with quantity not equal to 0 is found.
            while (randomNumber === tableData[itemNumber].number || isNoZero !== -1) {
                randomNumber = Math.floor(Math.random() * 7) + 1;
                isNoZero = tableData.findIndex((item) => (item.number == randomNumber && item.quantity == 0));
            }
            const item = tableData.findIndex((item) => item.number == randomNumber);
            setResult(randomNumber);
            setResultItem(tableData[item].item);
        } else {
            const item = tableData.findIndex((item) => item.number == randomNumber);
            setResult(randomNumber);
            setResultItem(tableData[item].item);
        }

        handleOpen();
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Modal
                open={open}
            >
                <Box>
                    <PopUpCard item={result} resultItem={resultItem} handleClose={handleClose} />
                </Box>
            </Modal>
            <Typography fontSize={"28px"} color={"white"} sx={{ position: "absolute" }}>
                Which reward you will get?
            </Typography>
            <button id="spin"></button>
            <button id="spinTwo"></button>
            <div className="container"
            >
                {data.map((item, index) => (
                    <div key={index} className={`${item.index}`} style={{ transform: `rotate(${(360 / data.length) * index}deg)` }}>
                        {item.item}
                    </div>
                ))}
            </div>
            <Box sx={{ display: "flex", justifyContent: "center", position: "absolute", marginTop: "430px" }}>
                <Button
                    sx={{ width: "325px", height: "58px", background: "#FFFFFF", padding: "16px", color: "black", borderRadius: "8px" }}
                    onClick={handleSpinClick}
                >
                    Spinnn!
                </Button>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", position: "absolute", marginTop: "500px" }}>
                <Box sx={{ flexDirection: "column" }} ref={myButtonRef}>
                    <Table>
                        <TableHead sx={{ background: "grey" }}>
                            <TableRow>
                                <TableCell sx={{ color: "white" }}>Item name</TableCell>
                                <TableCell sx={{ color: "white" }} align="right">Quantity (piece)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.filter((item) => item.number == 1 || item.number == 4 || item.number == 5).map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" sx={{ color: "white" }}>
                                        {row.item}
                                    </TableCell>
                                    <TableCell align="right" sx={{ color: "white" }}>{row.quantity !== -1 ? row.quantity : "Unlimited"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Button onClick={handleRefresh} sx={{ background: "white", color: "black" }}>Reset</Button>
                </Box>
            </Box>
        </Box>
    );
}
