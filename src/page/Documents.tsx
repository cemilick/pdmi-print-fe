import React from 'react';
import { Page, View, Document, StyleSheet, PDFViewer, Image, Svg } from '@react-pdf/renderer';
import { Container } from 'react-bootstrap';
import pdmiLogo from './../assets/pdmi_logo.png';
import { faAt, faGlobe, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import FaIcon from '../component/FontAwesomeIcon/FaIcon';
import { color } from '../utils/constant';
import { DocsText } from '../component/DocsText';
import { Line } from '../component/Line';
import _ from 'lodash';
import QRCode from '../component/QRCode';

// Create styles
const styles = StyleSheet.create({
  page: {
    borderTopWidth: 20,
    borderBottomWidth: 20,
    borderColor: color.primary
  },
  innerPage: {
    borderTopWidth: 8,
    borderBottomWidth: 8,
    borderColor: color.secondary,
    backgroundColor: '#fff',
    height: '94vh'
  },
  section: {
    flexDirection: 'row',
  },
  view: {
    padding: 10,
    marginBottom: 50
  },
  logo: {
    width: 100,
    paddingLeft: 10
  }
});

// Create Document Component
const MyDocument = (props) => {

  const fullname = _.toUpper(props?.name ?? "");
  const univ = _.toUpper(props?.university ?? "");

  return (
    <Document>
      <Page size="A4" style={styles.page} orientation='landscape'>
        <div style={styles.innerPage}>
          <div style={styles.section}>
            <View style={styles.view}>
              <Image src={pdmiLogo} style={styles.logo} />
            </View>
            <View style={styles.view}>
              <DocsText color={color.primary} size='lg'>
                PERKUMPULAN DOSEN MUSLIM INDONESIA
              </DocsText>
              <DocsText size='sm'>
                ORGANISASI PROFESI DOSEN SK Kemenkumham No. AHU-0015304.AH.01.07 Tahun 2017
              </DocsText>
              <Line />
              <div style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <FaIcon faIcon={faMapMarkerAlt} size={7} style={{ marginRight: 5 }} />
                <DocsText size='sm'>Sekretariat: Jl. Lempung Tama No. 78 Lontar, Kec. Sambikerep, Kota Surabaya</DocsText>
              </div>
              <div style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FaIcon faIcon={faAt} size={7} style={{ marginRight: 5 }} />
                <DocsText size='sm'>dpp@pdmi.or.id</DocsText>
                <FaIcon faIcon={faGlobe} size={7} style={{ marginHorizontal: 5 }} />
                <DocsText size='sm'>https://pdmi.or.id</DocsText>
              </div>
            </View>
          </div>
          <div style={{ ...styles.section, justifyContent: 'space-between', paddingRight: 100, paddingLeft: 10 }}>
            <View style={styles.view}>
              <DocsText size='lg' color={color.primary}>KARTU ANGGOTA</DocsText>
              <DocsText size='md' color={color.primary}>NO. DMI20170004</DocsText>
            </View>
            <View style={styles.view}>
              <DocsText size='lg' color={color.primary}>{fullname}</DocsText>
              <DocsText size='md' color={color.primary}>{univ}</DocsText>
            </View>
          </div>
          <div style={styles.section}>
            <View style={{ ...styles.view, width: '75vw' }}>
              <DocsText size='sm' color={color.primary}>Visi:</DocsText>
              <DocsText size='sm'>Menjadi organisasi dosen yang profesional, nasionalis, dan islami.</DocsText>
              <DocsText size='sm' color={color.primary}>Misi:</DocsText>
              <DocsText size='sm'>1. Melaksanakan Tri Darma Perguruan Tinggi (Pendidikan, Penelitian dan Pengabdian Masyarakat) yang mampu meningkatkan kualitas hidup umat.</DocsText>
              <DocsText size='sm'>2. Membangun kerja sama dengan seluruh komponen, di tingkat nasional dan internasional, dalam rangka memaksimalkan potensi umat.</DocsText>
              <DocsText size='sm'>3. Meningkatkan kapasitas profesionalisme dosen, memupuk rasa nasionalisme dan meningkatkan penghayatan dan pengamalan ajaran Islam.</DocsText>
            </View>
            <View style={{ ...styles.view, marginTop: 20, marginLeft: 15 }}>
              <QRCode
                url={`Saya ${fullname} merupakan anggota PDMI yang saat ini bekerja sebagai dosen di ${univ}`}
                foreground={color.primary}
                width={150}
              />
            </View>
          </div>
        </div>
      </Page>
    </Document>
  )
};

interface IDocuments {
  name?: string;
  university?: string;
}

export const Documents: React.FC<IDocuments> = (props) => {
  return (
    <Container fluid className='p-0'>
      <PDFViewer style={{ width: '80vw', height: '100vh' }}>
        <MyDocument name={props.name} university={props.university} />
      </PDFViewer>
    </Container>
  )
}