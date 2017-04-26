<!-- KOLOM KANAN -->
<div class="col-md-3 right-bar columns"> 

  <div class="profile-recap">
    <?php 
    if($this->user_auth->is_logged_in())
    {
    ?>
	<a href="http://www.ddtc.co.id/en/publication/440/perjanjian-penghindaran-pajak-berganda/" target="blank" id="bannerimage">
		<div style="overflow:hidden">
			<img alt="" src="http://engine.ddtc.co.id/assets/themes/images/books.jpg" style="width:100%;margin:10px 0px 10px -10px">                              
		</div>	  
    </a>
	<!--<a href="http://www.ddtc.co.id/en/publication/books/" target="blank" id="bannerimagenews">
		<div style="overflow:hidden">
			<img alt="" src="http://engine.ddtc.co.id/assets/themes/images/books.png" style="width:100%;margin:10px 0px 10px -10px">                              
		</div>	  
    </a>-->
    <div class="profile-recap-section">
      <div class="right-mini-title">Dokumen Favorit</div>
      <?php
      foreach($favourite_document as $row)
      {
        $favourite_type = $row['favourite_type'];
        $favourite_document_id = $row['favourite_document_id'];

        $data = get_data_dokumen($favourite_type, $favourite_document_id);
      ?>

      <?php
        if($favourite_type == 1)
        {
      ?>
        <div class="profile-recap-item">
          <a href="" data-toggle="modal" data-target="<?php echo ($this->user_auth->is_logged_in()) ? '.doc-modal' : ''; ?>" id="<?php echo $data['id']; ?>" data-idmodal="<?php echo $data['id']; ?>" class="modalcaller">
            <?php echo $data['jenis_dokumen_lengkap']; ?><br>
            <?php echo $data['nomordokumen']; ?><br>
          </a>
        </div>
      <?php
        }
      ?>

      <?php
        if($favourite_type == 2)
        {
      ?>
        <div class="profile-recap-item">
          <a href="" data-toggle="modal" data-target="<?php echo ($this->user_auth->is_logged_in()) ? '.doc-modal-p3b' : ''; ?>" data-id="<?php echo $data['p3b_id']; ?>" data-idmodal="<?php echo $data['p3b_id']; ?>" class="modalcaller-p3b">
            Perjanjian Penghindaran Pajak Berganda<br />
            <?php echo $data['p3b_country']; ?>
          </a>
        </div>
      <?php
        }
      ?>

      <?php
        if($favourite_type == 3)
        {
      ?>
        <div class="profile-recap-item">
          <a href="" data-toggle="modal" data-target="<?php echo ($this->user_auth->is_logged_in()) ? '.doc-modal-pp' : ''; ?>" data-id="<?php echo $data['id']; ?>" data-idmodal="<?php echo $data['id']; ?>" class="modalcaller-pp">
            Putusan Pengadilan Pajak<br />
            <?php echo $data['nomor']; ?>
          </a>
        </div>
      <?php
        }
      ?>

      <?php
        if($favourite_type == 4)
        {
      ?>
        <div class="profile-recap-item">
          <a href="" data-toggle="modal" data-target="<?php echo ($this->user_auth->is_logged_in()) ? '.doc-modal-ma' : ''; ?>" data-id="<?php echo $data['ma_id']; ?>" data-idmodal="<?php echo $data['ma_id']; ?>" class="modalcaller-ma">
            Putusan Mahkamah Agung<br />
            <?php echo $data['ma_number']; ?>
          </a>
        </div>
      <?php
        }
      ?>

      <?php
      }
      ?>
    </div>
    <?php
    }
    ?>

    <div class="profile-recap-section">
      <div class="right-mini-title">Dokumen Terakhir Dilihat</div>

      <?php
      foreach($latest_document as $row)
      {
      ?>
      <div class="profile-recap-item">
        <a href="" data-toggle="modal" data-target="<?php echo ($this->user_auth->is_logged_in()) ? '.doc-modal' : ''; ?>" id="<?php echo $row['id']; ?>" data-idmodal="<?php echo $row['id']; ?>" class="modalcaller">
          <?php echo $row['jenis_dokumen_lengkap']; ?><br>
          <?php echo $row['nomordokumen']; ?><br>
        </a>
      </div>
      <?php
      }
      ?>

      <?php
      foreach($latest_document_pp as $row)
      {
      ?>
      <div class="profile-recap-item">
        <a href="" data-toggle="modal" data-target="<?php echo ($this->user_auth->is_logged_in()) ? '.doc-modal-pp' : ''; ?>" data-id="<?php echo $row['id']; ?>" data-idmodal="<?php echo $row['id']; ?>" class="modalcaller-pp">
          Putusan Pengadilan Pajak<br />
          <?php echo $row['nomor']; ?>
        </a>
      </div>
      <?php
      }
      ?>

      <?php
      foreach($latest_document_p3b as $row)
      {
      ?>
      <div class="profile-recap-item">
        <a href="" data-toggle="modal" data-target="<?php echo ($this->user_auth->is_logged_in()) ? '.doc-modal-p3b' : ''; ?>" data-id="<?php echo $row['p3b_id']; ?>" data-idmodal="<?php echo $row['p3b_id']; ?>" class="modalcaller-p3b">
          Perjanjian Penghindaran Pajak Berganda<br />
          <?php echo $row['p3b_country']; ?>
        </a>
      </div>
      <?php
      }
      ?>

      <?php
      foreach($latest_document_ma as $row)
      {
      ?>
      <div class="profile-recap-item">
        <a href="" data-toggle="modal" data-target="<?php echo ($this->user_auth->is_logged_in()) ? '.doc-modal-ma' : ''; ?>" data-id="<?php echo $row['ma_id']; ?>" data-idmodal="<?php echo $row['ma_id']; ?>" class="modalcaller-ma">
          Putusan Mahkamah Agung<br />
          <?php echo $row['ma_number']; ?>
        </a>
      </div>
      <?php
      }
      ?>

      <small><a href="<?php echo site_url(); ?>user/favourite">Lihat semua &raquo;</a></small>

    </div>

    <?php 
    if($this->user_auth->is_logged_in())
    {
    ?>
    <!--<div class="profile-recap-section">
      <div class="right-mini-title">Pencarian Terakhir</div>
      <div class="profile-recap-item">
        Migas, PBB, Transfer Pricing
      </div>
    </div>-->
    <?php
    }
    ?>
  </div>

  <div class="right-menu-title">Dokumen Terbaru</div>
  <div class="latest-document">
    <div class="latest-document-item">
      <div class="latest-document-date"><?php echo format_tanggal_indonesia($notif_new_document_1_date, 'long'); ?></div>
      <div><span><?php echo $notif_new_document_1_count; ?> Peraturan Pajak</span> baru ditambahkan ke dalam katalog</div>
	  <div>
		  <?php
		  foreach($latest_document_1 as $row)
		  {
		  ?>
			<a href="" data-toggle="modal" data-target="<?php echo ($this->user_auth->is_logged_in()) ? '.doc-modal' : ''; ?>" id="<?php echo $row['id']; ?>" data-idmodal="<?php echo $row['id']; ?>" class="modalcaller">
			  <?php echo $row['jenis_dokumen_lengkap']; ?>
			  <?php echo $row['nomordokumen']; ?>
			</a>
		  <?php
		  }
		  ?>
	  </div>
    </div>
    
    <div class="latest-document-item">
      <div class="latest-document-date"><?php echo format_tanggal_indonesia($notif_new_document_2_date, 'long'); ?></div>
      <div><span><?php echo $notif_new_document_2_count; ?> Putusan Pengadilan Pajak</span> baru ditambahkan ke dalam katalog</div>
	  <div>
		  <?php
		  foreach($latest_document_pp_1 as $row)
		  {
		  ?>
			<a href="" data-toggle="modal" data-target="<?php echo ($this->user_auth->is_logged_in()) ? '.doc-modal-pp' : ''; ?>" data-id="<?php echo $row['id']; ?>" data-idmodal="<?php echo $row['id']; ?>" class="modalcaller-pp">
			  Putusan Pengadilan Pajak<br />
			  <?php echo $row['nomor']; ?>
			</a>
		  <?php
		  }
		  ?>
	  </div>
    </div>
    
    <div class="latest-document-item">
      <div class="latest-document-date"><?php echo format_tanggal_indonesia($notif_new_document_3_date, 'long'); ?></div>
      <div><span><?php echo $notif_new_document_3_count; ?> P3B</span> baru ditambahkan ke dalam katalog</div>
	  <div>
		  <?php
		  foreach($latest_document_p3b_1 as $row)
		  {
		  ?>
			<a href="" data-toggle="modal" data-target="<?php echo ($this->user_auth->is_logged_in()) ? '.doc-modal-p3b' : ''; ?>" data-id="<?php echo $row['p3b_id']; ?>" data-idmodal="<?php echo $row['p3b_id']; ?>" class="modalcaller-p3b">
			  Perjanjian Penghindaran Pajak Berganda<br />
			  <?php echo $row['p3b_country']; ?>
			</a>
		  <?php
		  }
		  ?>
	  </div>
    </div>

    <div class="latest-document-item">
      <div class="latest-document-date"><?php echo format_tanggal_indonesia($notif_new_document_4_date, 'long'); ?></div>
      <div><span><?php echo $notif_new_document_4_count; ?> Putusan Mahkamah Agung</span> baru ditambahkan ke dalam katalog</div>
	  <div>
		  <?php
		  foreach($latest_document_ma_1 as $row)
		  {
		  ?>
			<a href="" data-toggle="modal" data-target="<?php echo ($this->user_auth->is_logged_in()) ? '.doc-modal-ma' : ''; ?>" data-id="<?php echo $row['ma_id']; ?>" data-idmodal="<?php echo $row['ma_id']; ?>" class="modalcaller-ma">
			  Putusan Mahkamah Agung<br />
			  <?php echo $row['ma_number']; ?>
			</a>
		  <?php
		  }
		  ?>
	  </div>
    </div>
  </div>
</div>