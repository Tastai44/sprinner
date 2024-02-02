import { Box, Button, Typography } from '@mui/material';
import { style } from '../css/box';

interface reward {
    item: number;
    resultItem: string;
    handleClose: () => void;
}

export default function PopUpCard(props: reward) {
    return (
        <Box sx={style}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ flexDirection: "column", textAlign: "center" }}>
                    {props.item == 1 ? (
                        <>
                            <img src="https://s3-alpha-sig.figma.com/img/1014/5a6c/5fd7b760df526a7da50f3310ba349db2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZjNprQDDvmdt0IevrUwIOF1JMEdw2TNW318emjmXD9HhLbzWK1A6OqKSOSjsOD5ccT-mKfeA6WFM82LwOoau6YXUboZ-j8TK832UxgWHIdedz~zClOYaSJEcRr33XQFnYxZePeuky2w7ACkzqmEaZ7zWLUeMcxiORhXdno32w19dgQVzqvJ8oBD-Qfe27UJJdLowbdGfja2dTQfGfRbT9kdsHFqPoyai4NPy4DXIG2XQVW4-ph1pd85~oi0urzPcW2rSxJn7dt9k2p8TiZOYLGZJExDQN9Q5XdWIiTuavvFO9NBIG7CbwzDqVwASRYn9LJlr~XsQ-10X~TwkIF4X3g__"
                                style={{ width: "134px", height: "134px", marginTop: "35px" }}
                            />
                            <Typography color={"white"} fontSize={20}>
                                Congratulations! <br />
                                You got {props.resultItem}
                            </Typography>
                        </>

                    ) : props.item == 4 ? (
                        <>
                            <img src="https://s3-alpha-sig.figma.com/img/8974/bf61/9fd4d52e2414a7809d9240696d9ea310?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lL0dsNiRd~TY5Xr8xWcDY25fPBlJphlxMXdTAl2gP3ikJyfA9hfuUrnASLPpSHhBQWLxgpC7V5Vfcpeok9N5vbluWTW8wVIskPgGdAMKa21AOgaDiuMs04Q3cUwUIvePU-qoD1v~n5WwxRLAOnNIoBllAm8C3sNlIi8UD-ZoctFSLjAi2xvaLSF~8c8VKdGjR~mQQcsYyAc3lwkktlEBurlegZ3UELRWAocD5xj8PAYxbCXsbU8XG1PC~ORBdJtmyXYIrduLERqnDO87GRqR8z93qmFCw4SqhaGlDzRC7ISIrrK4glJlvQKsnP-8P0t~eJzurZ8Zied9P2rB-KTstw__"
                                style={{ width: "134px", height: "134px", marginTop: "35px" }}
                            />
                            <Typography color={"white"} fontSize={20}>
                                Congratulations! <br />
                                You got {props.resultItem}
                            </Typography>
                        </>
                    ) : props.item == 5 ? (
                        <>
                            <img src="https://s3-alpha-sig.figma.com/img/dda7/3432/fb54f9338dc7854270c74ae408077b5a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VYAhxGBBtwLq0Zg~kzaXSgTlKE3085XVZ4TCk0L2Ovn4FSTdOXCE-~4JWlIOQVJRntvDP7XYOC90Nf6KbU6IPFF94vIxG4BZVkWrRBBPqSF40k0Oju0kw97IXW3fXaHxGAWz6Qkt7gxXzjBg~lNWA-1t1z4JNWVGf-y8nhkCpL86-OleaJQRM47A3ro5VmbeVFntHYyIZ5aqAoEv4m8YAVD8-VTlcGBCQWN7kICAFRC862eVY52jvZD8T10F8-lNUxMAwsUugIK2uWvEBWyXlS0MB2Fy~VIi0~7uBVwl~WUvxHOhZrSngko62dtnGvZxwUhALzbfqge60KwDA~nWJw__"
                                style={{ width: "134px", height: "134px", marginTop: "35px" }}
                            />
                            <Typography color={"white"} fontSize={20}>
                                Congratulations! <br />
                                You got 1,111 bath
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography fontSize={"100px"} sx={{ marginTop: "35px" }}>
                                🙏
                            </Typography>
                            <Typography color={"white"} fontSize={20}>
                                {props.resultItem}
                            </Typography>
                        </>
                    )}

                    <Button
                        sx={{
                            background: "black", fontSize: "20px",
                            color: "white", marginTop: "30px", borderRadius:
                                "15px", width: "135px", height: "51px"
                        }}
                        onClick={props.handleClose}
                    >
                        Close
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
