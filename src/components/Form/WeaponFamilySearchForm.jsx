// src/components/Form/WeaponFamilySearchForm.jsx
import React from "react";

const WeaponFamilySearchForm = () => {
	return (
		<div>
			<h2>Recherche d'Armes & de Familles</h2>
			<form>
				<div>
					<label>Patronyme/Famille:</label>
					<input type="text" placeholder="Rechercher" />
				</div>
				<div>
					<label>Fief ou Commune:</label>
					<input type="text" placeholder="Rechercher" />
				</div>
				<button type="submit">Rechercher</button>
			</form>
		</div>
	);
};

export default WeaponFamilySearchForm;
