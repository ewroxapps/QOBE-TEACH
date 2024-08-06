import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger
} from 'react-native-popup-menu';
import AttainmentG from '../../../../Assets/SVGs/AttainmentG';
import Discussions from '../../../../Assets/SVGs/Discussions';
import Graph from '../../../../Assets/SVGs/Graph';
import ObeStats from '../../../../Assets/SVGs/ObeStats';
import PeoOBE from '../../../../Assets/SVGs/PeoOBE';
import Plan from '../../../../Assets/SVGs/Plan';
import Resource from '../../../../Assets/SVGs/Resource';
import Survey1 from '../../../../Assets/SVGs/Survey1';
import Weights from '../../../../Assets/SVGs/Weights';
import { Spinner } from '../../../../Components';
import { useClassCourseOutlineQuery } from '../../../../RTK/Api/CourseApi';
import {
  CLASSROOM_OUTLINE,
  CLASS_PLAN,
  CLO,
  PLO,
  SURVEY_DESIGN,
  UNI_CLASS_ROOM,
  VIEW
} from '../../../../Types/Constants';
import CourseOutlineModal from '../CourseOutLineModal';
import styles from './styles';
import { ListProps } from './types';
const ListFaculty = (props: ListProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenPLO, setMenuOpenPLO] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showOutlin, setShowOutline] = useState(false);
  const navigation = useNavigation<ICoursesNavigationProp>();
  const { course, id } = props;
  const { data, refetch, isFetching, isLoading } = useClassCourseOutlineQuery({
    id: id
  });

  if (isFetching || isLoading) {
    return <Spinner />;
  }

  const showOutline = props.permission?.some(
    (permission: any) =>
      permission.option_type === CLASSROOM_OUTLINE && permission.action === VIEW
  );

  const plan = props.permission?.some(
    (permission: any) =>
      permission.option_type === CLASS_PLAN && permission.action === VIEW
  );

  const survey = props.permission?.some(
    (permission: any) =>
      permission.option_type === SURVEY_DESIGN && permission.action === VIEW
  );

  const clo = props.permission?.some(
    (permission: any) =>
      permission.option_type === UNI_CLASS_ROOM && permission.action === CLO
  );

  const plo = props.permission?.some(
    (permission: any) =>
      permission.option_type === UNI_CLASS_ROOM && permission.action === PLO
  );

  const options = [
    {
      permission: showOutline,
      component: <Plan style={{ bottom: 5 }} />,
      text: 'Course Outline'
    },
    {
      permission: plan,
      component: <Plan style={{ bottom: 5 }} />,
      text: 'Teaching Plan'
    },
    {
      permission: plan,
      component: <Resource style={{ bottom: 5 }} width={20} />,
      text: 'Resources'
    },
    {
      permission: survey,
      component: <Survey1 />,
      text: 'Survey'
    },
    {
      permission: true,
      component: <Discussions style={{ bottom: 5 }} />,
      text: 'Discussion Forum'
    },
    {
      permission: plo,
      component: <PeoOBE style={{ top: -5 }} />,
      text: 'PLO'
    },
    {
      permission: clo,
      component: <Weights style={{ bottom: 5 }} />,
      text: 'CLO'
    }
  ];

  const optionsToShow = showMore ? options : options.slice(0, 3); // Either show all options or the first three

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.outerBlockContainer}>
          {optionsToShow.map((option, index) => {
            if (option.permission) {
              return (
                <TouchableOpacity
                  key={index}
                  style={{ flexDirection: 'row' }}
                  onPress={() => {
                    if (option.text === 'Course Outline') {
                      setShowOutline(!showOutlin);
                    } else if (option.text === 'Teaching Plan') {
                      navigation.navigate('Teaching', { id: id });
                    } else if (option.text === 'Resources') {
                      navigation.navigate('Resources', {
                        courseId: course?.id,
                        course: course
                      });
                    } else if (option.text === 'Survey') {
                      navigation.navigate('Survey', { id: props.id });
                    } else if (option.text === 'Discussion Forum') {
                      navigation.navigate('Forums', {
                        id: id,
                        name: course.name
                      });
                    }
                  }}>
                  {option.text != 'CLO' && option.text != 'PLO' ? (
                    <View style={styles.innerBlockContainer}>
                      {option.component}
                      <Text style={styles.text}>{option.text}</Text>
                    </View>
                  ) : null}
                  {option.text === 'PLO' ? (
                    <Menu
                      opened={menuOpenPLO}
                      onBackdropPress={() => setMenuOpenPLO(false)}>
                      <MenuTrigger
                        onPress={() => setMenuOpenPLO(true)}
                        customStyles={{
                          TriggerTouchableComponent: TouchableOpacity
                        }}>
                        <View style={styles.innerBlockContainer}>
                          {option.component}
                          <Text style={styles.text}>{option.text}</Text>
                        </View>
                      </MenuTrigger>
                      <MenuOptions
                        optionsContainerStyle={styles.menuOptionsContainer}>
                        <View style={styles.sloheader}>
                          <Weights />
                          <Text style={styles.sloTxt}>PLO</Text>
                        </View>
                        <View style={styles.menuJustify}>
                          <MenuOption
                            style={styles.menuOptionContainer}
                            onSelect={() => {
                              navigation.navigate('PLOAttainment', { id: id });
                              setMenuOpenPLO(false);
                            }}>
                            <ObeStats />
                            <Text style={styles.txts}>Attainment</Text>
                          </MenuOption>

                          <MenuOption
                            style={styles.menuOptionContainer}
                            onSelect={() => {
                              navigation.navigate('PLOGraph', { id: id });
                              setMenuOpenPLO(false);
                            }}>
                            <AttainmentG />
                            <Text style={styles.txts}>Attainment Graph</Text>
                          </MenuOption>
                        </View>
                      </MenuOptions>
                    </Menu>
                  ) : null}
                  {option.text === 'CLO' ? (
                    <View>
                      <Menu
                        opened={menuOpen}
                        onBackdropPress={() => setMenuOpen(false)}>
                        <MenuTrigger
                          onPress={() => setMenuOpen(true)}
                          customStyles={{
                            TriggerTouchableComponent: TouchableOpacity
                          }}>
                          <View style={styles.innerBlockContainer}>
                            {option.component}
                            <Text style={styles.text}>{option.text}</Text>
                          </View>
                        </MenuTrigger>
                        <MenuOptions
                          optionsContainerStyle={[
                            styles.menuOptionsContainer,
                            props.activitylength > 1
                              ? { marginTop: 0 }
                              : { marginTop: -160 }
                          ]}>
                          <View style={styles.sloheader}>
                            <Weights />
                            <Text style={styles.sloTxt}>CLO</Text>
                          </View>
                          <View style={styles.menuJustify}>
                            <MenuOption
                              style={styles.menuOptionContainer}
                              onSelect={() => {
                                navigation.navigate('SLO', { id: id });
                                setMenuOpen(false);
                              }}>
                              <Graph />
                              <Text style={styles.txts}>List</Text>
                            </MenuOption>

                            <MenuOption
                              style={styles.menuOptionContainer}
                              onSelect={() => {
                                navigation.navigate('SLOAttainment', {
                                  from: 'SLO',
                                  id: id
                                });
                                setMenuOpen(false);
                              }}>
                              <ObeStats />
                              <Text style={styles.txts}>Attainment</Text>
                            </MenuOption>
                          </View>

                          <View style={styles.menuJustify}>
                            <MenuOption
                              style={styles.menuOptionContainer}
                              onSelect={() => {
                                navigation.navigate('SLOGraph', {
                                  from: 'SLO',
                                  id: id
                                });
                                setMenuOpen(false);
                              }}>
                              <AttainmentG />
                              <Text style={styles.txts}>Attainment Graph</Text>
                            </MenuOption>
                          </View>
                        </MenuOptions>
                      </Menu>
                    </View>
                  ) : null}
                </TouchableOpacity>
              );
            }
            return null;
          })}
        </View>
      </View>
      {options.length > 3 && ( // Check if there are more than 3 options
        <TouchableOpacity
          style={styles.showMore}
          onPress={() => {
            setShowMore(!showMore);
          }}>
          <Text style={styles.blueText}>
            {showMore ? 'Show less' : 'Show more'}
          </Text>
        </TouchableOpacity>
      )}
      {showOutlin ? (
        <CourseOutlineModal
          modalVisible={showOutlin}
          setModalVisible={setShowOutline}
          data={data}
        />
      ) : null}
    </View>
  );
};

export default ListFaculty;
