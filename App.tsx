import React from 'react';
import { View, Text, TextInput, Image, Button, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Selamat datang di Aplikasi Penjualan baju online</Text>
      <TextInput placeholder="Cari produk..." />
      <ScrollView>
        <Image
        source={{uri:'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/97/MTA-142724293/no_brand_kaos_distro_murah_baju_distro_pria_t-shirt_murah_combed30s_perfect_human_crazy_silang_full01_e4ib5326.jpg'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//107/MTA-48293855/no_brand_baju_kaos_distro_pria_-_kaos_pria_-_kaos_laki_-_baju_kaos_pria_murah_-_baju_distro_-__full01_hqrjszjc.jpg'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-36004963/brd-69012_baju-kaos-distro-boy-pria-lengan-pendek_full01.jpg'}}style={{width:200,height:200}}/>
      </ScrollView>
      <Button title="Beli" onPress={() => ('Produk telah ditambahkan ke keranjang belanja')} />
    </View>
  );
};

export default App;