import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";

export default function SignIn() {
	return (
		<Box component="main" className="bg-[#faebd7] px-6 py-28">
			<Container maxWidth="xs">
				<fieldset className="px-2">
					<legend>Sign In</legend>
					<TextField
						margin="normal"
						required
						label="Username"
						autoComplete="off"
						size="small"
						fullWidth
					/>
					<TextField
						margin="normal"
						required
						label="Password"
						autoComplete="off"
						size="small"
						fullWidth
					/>
					<Box className="flex justify-center">
						<Button
							type="button"
							variant="contained"
							sx={{ mt: 2, mb: 2, textTransform: "capitalize" }}
						>
							Sign In
						</Button>
					</Box>
				</fieldset>
			</Container>
		</Box>
	);
}
