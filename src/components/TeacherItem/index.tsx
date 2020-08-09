import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import hearOutlineButton from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import wahtsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container} >
            <View style={styles.profile} >
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars0.githubusercontent.com/u/55262061?s=460&u=afd5e36a1928c45b184a72081834fe19a88b7046&v=4' }} />

                <View style={styles.profileInfo} >
                    <Text style={styles.name} >Lucas Barroso</Text>
                    <Text style={styles.subject} >Química</Text>
                </View>
            </View>


            <Text style={styles.bio} >
                Entusiasta das melhores tecnologias de química avançada
            {`\n`} {`\n`}
            Apaixonado por criar coisas em todos os cantos e servir as pessoas trazendo conhecimento.
        </Text>

            <View style={styles.footer} >
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>
                <View style={styles.buttonsContainer} >
                    <RectButton style={[styles.favoriteButton, styles.favorited]} >
                        {/* <Image source={hearOutlineButton} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton} >
                        <Image source={wahtsappIcon} />
                        <Text style={styles.contactButtonText} >Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>

        </View>
    );
}

export default TeacherItem;