const dummyTexts = [
     `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ipsum a lectus laoreet faucibus in eget metus.
         Integer dapibus vitae mauris in volutpat. Morbi pellentesque nisi sit amet fringilla maximus.
          Nullam enim lorem, malesuada quis leo volutpat, posuere aliquet enim. Aliquam placerat in dolor viverra lacinia.
           Nam nulla dolor, dictum eget faucibus quis, tristique ut est. Cras interdum turpis at eros pretium lobortis.
            Duis eget nulla id elit tincidunt tristique. Nulla in auctor lacus. Duis ornare vitae lorem gravida pharetra. 
            Sed at ipsum feugiat, porta nibh placerat, congue tellus. In pharetra posuere lorem a tincidunt.
            Pellentesque semper quis eros sit amet sagittis.`
    ,
        `\nPhasellus aliquet libero nec malesuada condimentum. Integer ac tempor massa.
               Pellentesque tellus dolor, hendrerit at eleifend et, accumsan vitae metus.
               Donec a ligula blandit, aliquam velit quis, tincidunt ante. 
               Morbi iaculis, ex id pellentesque ultrices, velit nulla sodales ipsum, vitae condimentum nisl erat non ligula. 
               Morbi iaculis, arcu non congue viverra, arcu nunc laoreet nisi, sit amet dictum tortor enim ac mauris. 
               Curabitur luctus nunc id dolor lacinia, quis blandit nisi sagittis.
               Pellentesque non efficitur dui. Etiam vestibulum ut nibh sit amet consectetur. 
               Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin accumsan finibus pulvinar.
               Nunc accumsan hendrerit justo, eget maximus risus fringilla ac. Nullam quis mauris suscipit, aliquam ligula eget, eleifend ipsum. 
               Maecenas tempus ligula non quam dictum, sit amet porta est rhoncus.`
    ,
    `Donec aliquet ligula augue, sit amet tincidunt dolor malesuada sit amet.
         Quisque tincidunt elit ultricies odio tempor efficitur. In et gravida erat.
          Morbi vestibulum mi lorem, et bibendum orci varius eu. Morbi ex velit, cursus ut velit ut, facilisis auctor magna.
           Praesent consectetur venenatis erat sollicitudin congue. Donec vel ante eget ligula cursus ornare id et leo. 
           Praesent at tristique erat. Proin lacus dui, ornare sit amet egestas blandit, pretium sed odio. 
        Sed eu lectus vitae justo pulvinar congue. Donec ac feugiat felis.`
    ,
    `Aenean eget facilisis mauris. Phasellus pellentesque justo in odio porttitor condimentum. 
        Maecenas eu risus vitae lorem porttitor egestas non id sapien. 
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
        Nunc rutrum gravida sem, eu accumsan odio vulputate imperdiet. Praesent non tortor feugiat, iaculis tortor pulvinar, placerat purus. 
        Quisque accumsan velit lectus, ac sodales metus porttitor quis. Donec id enim eget libero egestas faucibus. 
        Mauris sem enim, porta id sapien id, malesuada iaculis sapien. Aenean ac urna ut justo aliquam pretium non non velit. 
        Aliquam congue justo ut neque molestie, quis rutrum ligula lobortis. Integer et velit mauris.
         Phasellus molestie commodo diam, nec dignissim lectus interdum eu.`
    ,
    `Phasellus vehicula lacus non massa fringilla, nec malesuada lacus commodo. Etiam efficitur leo id libero rhoncus ullamcorper. In suscipit diam odio, id posuere nisl dictum id. Ut ipsum est, blandit in purus quis, dictum fermentum felis. Vivamus eget viverra nibh, scelerisque elementum tortor. Cras hendrerit posuere sem sit amet cursus. Proin vehicula, ante et rutrum lacinia, odio ligula elementum nisi, ut hendrerit quam lorem vel justo. Donec feugiat dictum tellus at euismod. Mauris fermentum, est ut tristique varius, libero mi imperdiet odio, sed commodo lorem lorem quis lorem. Aenean vel turpis augue. Nunc semper ut nulla eu porta.
         Maecenas a viverra odio, ut lacinia dolor. Mauris iaculis pretium libero et placerat.`
    ,
     `Aliquam sed dapibus elit. Nulla et auctor nibh. Curabitur in ex ut orci cursus tristique at vel elit. 
        Cras ut ornare ipsum. Mauris congue euismod ex et lobortis. Sed vitae nisl ante. In ultricies tortor eget nibh pretium placerat. 
        Sed euismod est et euismod varius. Cras ac lorem pellentesque, rhoncus eros at, ullamcorper risus.
         Quisque fringilla purus vestibulum lorem placerat, eget posuere quam rhoncus. Cras at consectetur arcu. 
         Quisque lobortis pretium ante vel suscipit. Cras pretium mi ante, non ullamcorper justo varius nec. 
         Proin hendrerit nisi quis erat fermentum congue. 
        Praesent ut urna quis ante bibendum ullamcorper ut in velit.`
    ,
    `Integer non nibh vehicula, bibendum sem a, vehicula ipsum. Curabitur lacus massa, porttitor a nibh ac, varius ultrices velit. 
               Donec at purus magna. Suspendisse vitae augue in lorem congue sodales. 
               Curabitur ligula justo, rutrum sit amet interdum at, tristique vitae lacus. Ut pulvinar rutrum ante id dignissim. 
               Quisque pulvinar commodo gravida. Aenean pharetra pulvinar felis nec elementum.
               Donec mattis quam vel enim lacinia, gravida congue risus hendrerit. 
               Vivamus sem nulla, vulputate eu ex eget, semper consequat velit. 
               Cras sit amet velit tristique, posuere orci eget, pellentesque mauris. Donec ultricies fringilla velit non scelerisque. 
               Mauris dapibus, diam eu rhoncus fringilla, neque neque pulvinar neque, interdum iaculis ligula lectus sodales neque.`
    ,
    `Morbi vitae molestie nibh. Vivamus hendrerit, sem nec efficitur tincidunt, felis sapien accumsan quam, sit amet facilisis massa dolor non sapien. 
               Morbi dictum metus quis nisl imperdiet, eget semper urna pulvinar. Vestibulum quis quam vel justo pulvinar congue. 
               In hac habitasse platea dictumst. Vestibulum suscipit eget odio elementum elementum. Vivamus at pretium felis.
               Curabitur placerat ante eget augue lobortis malesuada. Nunc bibendum nunc vulputate turpis maximus imperdiet. 
               Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
               Nunc quis eros egestas, suscipit mi et, feugiat erat.
               Praesent egestas ullamcorper augue eget porta. Nulla tellus nulla, tempus quis quam ac, eleifend consectetur augue.`
    ,
    `Aliquam sed dapibus elit. Nulla et auctor nibh. Curabitur in ex ut orci cursus tristique at vel elit. 
               Cras ut ornare ipsum. Mauris congue euismod ex et lobortis. Sed vitae nisl ante. 
               In ultricies tortor eget nibh pretium placerat. Sed euismod est et euismod varius.
               Cras ac lorem pellentesque, rhoncus eros at, ullamcorper risus.
               Quisque fringilla purus vestibulum lorem placerat, eget posuere quam rhoncus.
               Cras at consectetur arcu. Quisque lobortis pretium ante vel suscipit. 
               Cras pretium mi ante, non ullamcorper justo varius nec. Proin hendrerit nisi quis erat fermentum congue.
               Praesent ut urna quis ante bibendum ullamcorper ut in velit.`
    



]
export default dummyTexts