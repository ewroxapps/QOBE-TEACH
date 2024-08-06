import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator, Divider } from 'react-native-paper';
import { Book, Document } from '../../../../Assets/SVGs';
import { useLazyStatsQuery } from '../../../../RTK/Api/UserApi';
import { Colors } from '../../../../Themes';
import styles from './styles';

const PendingTasks = () => {
  const { t } = useTranslation('home');
  const [getTodaysTasks, { isLoading, data }] = useLazyStatsQuery();

  useEffect(() => {
    if (!isLoading && !data) {
      getTodaysTasks({});
    }
  }, []);
  return (
    <LinearGradient
      colors={[Colors.gradientblack, Colors.gradientanotherblack,Colors.lastBlack]}
      style={styles.floatingContainer}>
      <View style={styles.floatingContainerSection}>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.backgroundWhite} />
        ) : (
          <Text style={styles.importantCount}>{data?.class_count ?? 0}</Text>
        )}

        <View style={styles.labelContainer}>
          <Book width={20} />
          <Text style={styles.label}>{t('lecturesToday')}</Text>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.floatingContainerSection}>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.backgroundWhite} />
        ) : (
          <Text style={styles.importantCount}>{data?.activity_due ?? 0}</Text>
        )}
        <View style={styles.labelContainer}>
          <Document width={20} />
          <Text style={styles.label}>{t('activitiesDue')}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default PendingTasks;
