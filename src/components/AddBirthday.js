import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from "moment";
import firebase from '../utils/firebase';
import 'firebase/firestore';

firebase.firestore().settings({experimentalForceLongPolling:true});
const db = firebase.firestore(firebase);

export default function AddBirthday(props){
    const {user, setShowList, setReloadData} = props;
    const [formData, setFormData] = useState({});
    const [isDatePicketVisible, setIsDatePicketVisible] = useState(false);
    const [formError, setFormError] = useState({});

    const hideDatePicker = () => {
        setIsDatePicketVisible(false);
    };

    const showDatePicker = () => {
        setIsDatePicketVisible(true);
    };

    const handlerConfirm = (date) => {
        const dateBirth = date;
        dateBirth.setHours(0);
        dateBirth.setMinutes(0);
        dateBirth.setSeconds(0);
        setFormData({...formData, dateBirth});
        hideDatePicker();
    };

    const onChange = (e, type) => {
        setFormData({...formData, [type]:e.nativeEvent.text})
    };

    const onSubmit = () => {
        let errors = {};
        if(!formData.name || !formData.lastname || !formData.dateBirth){
            if(!formData.name) errors.name = true;
            if(!formData.lastname) errors.lastname = true;
            if(!formData.dateBirth) errors.dateBirth = true;
        }
        else{
            const data = formData;
            data.dateBirth.setYear(0);
            db.collection(user.uid)
        }
    }
}