<div class="middle-column-title">Peraturan Pajak</div>
<div>Jumlah Peraturan Pajak : <strong><?php echo $count_all; ?></strong> Peraturan Pajak
<div class="P3-last-update">Terakhir diperbarui <span><?php echo format_tanggal_indonesia($latest_per['submit_date']); ?></span></div></div>

<form class="p3-form" id="form-search" method="post" action="<?php echo site_url() ?>peraturan-pajak/do_search">
  <div class="form-putusan-pengadilan">
    <div class="p3-title">Cari Peraturan Pajak</div>

    <div>
      <p><a href="#" style="color: #F77B04; text-decoration: blink; font-size: 1.2em;" class="info" data-toggle="modal" data-target="#modalInfoPer"><span class="glyphicon glyphicon-info-sign"></span> <blink>Informasi Pencarian</blink></a></p>
    </div>
    
    <div class="col-md-6 inputs">
        <input type="text" class="form-control" placeholder="Masukkan Kata Kunci" name="search_key" value="<?php echo $this->session->userdata('key_session'); ?>">
    </div>
    <div class="col-md-3 inputs">
      <select class="form-control" name="search_category" >
        <option value="semua-kategori" selected="selected">Semua Kategori</option>
      <?php
        foreach($ls_topik as $row)
        {
      ?>
        <option value="<?php echo $row['topik_url']; ?>" <?php echo ($row['topik_url'] === $this->uri->segment(4)) ? 'selected' : ''; ?>><?php echo $row['topik_name']; ?></option>
      <?php
        }
      ?>
      </select>
    </div>
    <div class="col-md-3 inputs">
      <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdown-left" data-toggle="dropdown" aria-expanded="true">
        <?php
          $search_document_url = $this->uri->segment(5);
          $search_document_array = explode('_', $search_document_url);

          $count_sd = count($search_document_array);

          if($count_sd == 0)
          {
            echo '<p>Semua Dokumen</p>';
          }
          else
          {
            if($search_document_url == 'semua-dokumen')
            {
              echo '<p>Semua Dokumen</p>';
            }
            else
            {
              echo '<p>'.$count_sd.' dokumen dipilih</p>';
            }
          }
      ?>
        </button>
        <ul class="dropdown-menu home-menu-kind">
          <?php
            $no = 1;
            foreach($ls_jenis_dokumen as $row)
            {
          ?>
            <li>
              <input type="checkbox" id="ID<?php echo $no; ?>" name="search_document[]" value="<?php echo $row['kelompok_url']; ?>" <?php echo (in_array($row['kelompok_url'], $search_document_array)) ? 'checked' : ''; ?>>
              <label for="ID<?php echo $no; ?>"><?php echo $row['kelompok']; ?></label>
            </li>
          <?php
              $no++;
            }
          ?>
        </ul>
      </div>
    </div>
    <div class="clearfix"></div>
      <div class="p3-metode-search">
        <strong>Metode </strong> 
        <label class="radio-inline">
          <input type="radio" name="search_method" id="inlineRadio1" value="kalimat" <?php echo ($this->uri->segment(9) == 'kalimat') ? 'checked="checked"' : ''; ?><?php echo (!$this->uri->segment(9)) ? 'checked="checked"' : ''; ?>> Kalimat
        </label>
        <label class="radio-inline">
          <input type="radio" name="search_method" id="inlineRadio2" value="dan" <?php echo ($this->uri->segment(9) == 'dan') ? 'checked="checked"' : ''; ?>> Dan
        </label>
        <label class="radio-inline">
          <input type="radio" name="search_method" id="inlineRadio3" value="atau" <?php echo ($this->uri->segment(9) == 'atau') ? 'checked="checked"' : ''; ?>> Atau
        </label>

        <div class="radio">
          <div class="menu-title">Tanggal</div>
          <label>
            <input type="radio" class="radio-satu" name="search_tanggal" id="opt-one" value="date" <?php echo ($this->uri->segment(7) == '0000') ? 'checked' : ''; ?>>
            <div class="input-append date tanggalfrom" data-date="<?php echo date('d-m-Y'); ?>" data-date-format="<?php echo date('d-m-Y'); ?>">
              <input size="16" id="tanggal-from" type="text" value="<?php echo $ls_tanggal_from; ?>" placeholder="dd-mm-yyyy" name="search_date_from" <?php echo ($this->uri->segment(7) == '0000') ? '' : 'disabled';?>>
            </div>
            -
            <div class="input-append date tanggalto" data-date="<?php echo date('d-m-Y'); ?>" data-date-format="<?php echo date('d-m-Y'); ?>">
              <input size="16" id="tanggal-to" type="text" value="<?php echo $ls_tanggal_to; ?>" placeholder="dd-mm-yyyy" name="search_date_to" <?php echo ($this->uri->segment(7) == '0000') ? '' : 'disabled';?>>
            </div>
          </label>
          <div class="form-atau">Atau</div>
          <div class="menu-title">Tahun</div>
          <label>
            <input type="radio" class="radio-dua" name="search_tanggal"  value="year" id="opt-two" <?php echo ($this->uri->segment(7) == '0000') ? '' : 'checked';?>>
            <select placeholder="semua" class="date-to" id="tahun" <?php echo ($this->uri->segment(7) == '0000') ? 'disabled' : '';?> name="search_year">
                <option value="0000" selected="selected">Semua</option>
              <?php
                foreach($ls_tahun as $row)
                {
              ?>
                <option value="<?php echo $row['tahun']; ?>" <?php echo ($row['tahun'] === $this->uri->segment(7)) ? 'selected' : ''; ?>><?php echo $row['tahun']; ?></option>
              <?php
                }
              ?>
            </select>
          </label>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-md-4">
              <div class="menu-title">Nomor</div>
              <input type="text" class="date-from" name="search_number_from" value="<?php echo $ls_nomor_from; ?>"><!-- - -->
              <input type="text" class="date-to" name="search_number_to" value="<?php echo $ls_nomor_to; ?>" style="display:none;">
            </div>
             <div class="col-md-8">
              <div class="perihal">
                <input type="checkbox" id="inlineCheckbox1" name="search_judul" value="1" <?php echo ($this->uri->segment(10)) ? 'checked' : ''; ?>> Cari Hanya di Perihal
              </div>
            </div>
          </div>
        </div>

      </div>

  </div>
  <button class="p3-btn-search" id="btn-search">Cari Dokumen</button>
  <div id="msg-search"></div>
</form>

<div class="middle-column-title">Hasil Pencarian</div>
<?php
  if($key == 'semua')
  {
?>
<div class="middle-column-result"><span><?php echo $count; ?> Dokumen</span> ditemukan</div>
<?php
  }
  else
  {
?>
<div class="middle-column-result"><span><?php echo $count; ?> Dokumen</span> dengan kata kunci <span>"<?php echo $this->session->userdata('key_session'); ?>"</span> ditemukan</div>
<?php
  }
?>

<div class="toolbar">
  Urut berdasarkan : 
  <button type="button" class="btn btn-default btn-xs" data-toggle="dropdown" aria-expanded="false" data-url="<?php echo $url_year; ?>" id="pp-tahun">Tahun <span class="glyphicon glyphicon-sort"></span></button>
  |
  <button type="button" class="btn btn-default btn-xs" data-toggle="dropdown" aria-expanded="false" data-url="<?php echo $url_number; ?>" id="pp-nomor">Nomor <span class="glyphicon glyphicon-sort"></span></button>
</div>

<!-- CONTOH ITEM HASIL SEARCH -->
<?php
foreach($result as $row)
{
?>
<div class="search-result-item">
  <div class="search-result-item-meta"><?php echo format_tanggal_indonesia($row['tanggal'], 'long'); ?> | View : <?php echo $row['view']; ?><!-- | <a href="">Download PDF</a>--></div>
  <div class="search-result-item-title">
    <!-- <a href="" data-toggle="modal" data-target="<?php echo ($this->user_auth->is_logged_in()) ? '.doc-modal' : ''; ?>" id="<?php echo $row['id']; ?>" data-idmodal="<?php echo $row['id']; ?>" class="modalcaller"><?php echo $row['jenis_dokumen_lengkap']; ?> Nomor: <?php echo $row['nomordokumen']; ?></a> -->
    <a href="<?php echo site_url('peraturan-pajak/read/'.$row['permalink']); ?>" data-toggle="modal" data-target=".doc-modal" id="<?php echo $row['id']; ?>" data-idmodal="<?php echo $row['id']; ?>" data-remote="false"  class="modalcaller"><?php echo $row['jenis_dokumen_lengkap']; ?> Nomor: <?php echo $row['nomordokumen']; ?></a>
  </div>
  <div class="search-result-item-excerpt">
    <?php echo $row['perihal']; ?>
  </div>
  <div class="search-result-item-more"><a href="<?php echo site_url('peraturan-pajak/read/'.$row['permalink']); ?>" data-toggle="modal" data-target=".doc-modal" id="<?php echo $row['id']; ?>" data-idmodal="<?php echo $row['id']; ?>" data-remote="false"  class="modalcaller">Read More</a></div>
</div>
<?php
}
?>
<!-- END CONTOH ITEM HASIL SEARCH -->

<nav class="search-pagination"><?php echo $paging; ?></nav>