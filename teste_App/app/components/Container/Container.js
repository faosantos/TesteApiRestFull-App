import React, {PropTypes} from 'react';
import { View } from 'react-native';
import styles from './styles';

const Container = ({children}) => (
    <View style={styles.Container}>
        {children}
    </View>
);

Container.propTypes = {
    children: PropTypes.elements,
};

export default Container;