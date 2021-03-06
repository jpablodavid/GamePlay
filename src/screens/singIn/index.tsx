import React, { useState } from "react";
import { StatusBar, Image, Text, View } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";

export function SingIn() {
	const [text, setText] = useState("");

	return (
		<View style={styles.container}>
			<Image
				source={IllustrationImg}
				style={styles.image}
				resizeMode="stretch"
			/>

			<View style={styles.content}>
				<Text style={styles.title}>
					Conecte-se {"\n"}e organize suas {"\n"}
					jogatinas
				</Text>

				<Text style={styles.subtitle}>
					Crie grupos para jogar seus games {"\n"}
					favoritos com seus amigos
				</Text>

				
				<ButtonIcon title="Entrar com Discord" activeOpacity={.7}/>
			
			</View>
		</View>
	);
}
